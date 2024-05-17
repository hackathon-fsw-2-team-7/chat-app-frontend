import axios from "axios";
import { toast } from "react-toastify";
import { setToken, setUser } from "../reducers/auth";

export const register =
    (navigate, username, email, password, name, photo, setIsLoading) =>
    async (dispatch) => {
        // make loading
        setIsLoading(true);

        let data = new FormData();
        data.append("username", username);
        data.append("email", email);
        data.append("password", password);
        data.append("name", name);
        if (photo) {
            data.append("photo", photo);
        }

        let config = {
            method: "post",
            url: `${import.meta.env.VITE_BACKEND_API}/api/register`,
            data: data,
        };

        try {
            const response = await axios.request(config);
            console.log(response)
            // get and save the token to local storage
            const { data } = response.data;
            const { token } = data;
            localStorage.setItem("token", token);

            // redirect to Home
            navigate("/");
        } catch (error) {
            toast.error(error?.response?.data?.message);

        }

        setIsLoading(false);
    };

export const loginWithGoogle = (navigate, accessToken) => async (dispatch) => {
        let data = JSON.stringify({
          access_token: accessToken,
        });
      
        let config = {
          method: "post",
          url: `${import.meta.env.VITE_BACKEND_API}/api/auth/google-login`,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
      
        try {
          const response = await axios.request(config);
          console.log(response);
      
          // get and save the token to local storage
          const { data } = response.data;
          const { token, user } = data;
      
          // Change the token value in the reducer
          dispatch(setToken(token));
          dispatch(setUser(user));
      
          // redirect to Home
          navigate("/"); // it will be not consistent, so alternative we use window until we used the state management
        } catch (error) {
          toast.error(error?.response?.data?.message);
      
        }
      };
      