import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import Register from "./pages/Register"
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "./redux/store";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
      path: "/register",
      element: <Register />,
  },
  {
    path: "/login",
    element: <LoginPage />,
},
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

function App() {
    return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router} />
        <ToastContainer theme="colored" />
        </GoogleOAuthProvider>
    </Provider>
    );
}

export default App;