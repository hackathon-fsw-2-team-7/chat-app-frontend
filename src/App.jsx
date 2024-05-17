import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";

import Register from "./pages/Register";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home/HomePage.jsx";
import ProfilePage from "./pages/Profile/ProfilePage";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";

import store from "./redux/store";
import AppNavbar from "./components/AppNavbar.jsx";
import Protected from "./components/Protected/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Protected>
          <AppNavbar/>
          <HomePage/>
        </Protected>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      // <NonProtected>
      <Register />
      // </NonProtected>
    ),
  },
  {
    path: "/login",
    element: (
      // <NonProtected>
      <Container className="mt-5">
        <LoginPage />
      </Container>
      // </NonProtected>
    ),
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