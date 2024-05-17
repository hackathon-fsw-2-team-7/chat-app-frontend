import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../redux/actions/register";

const GoogleLoginComponent = ({ text }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      dispatch(loginWithGoogle(navigate, codeResponse?.access_token));
    },
  });

  return (
    <button
      className="btn btn-secondary w-100 rounded-pill"
      onClick={() => login()}
    >
      Register with Google
    </button>
  );
};

GoogleLogin.propTypes = {
  text: PropTypes.string,
};

export default GoogleLoginComponent;
