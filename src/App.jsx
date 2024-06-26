import store from "./redux/store";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import EditProfilePage from "./pages/EditProfile";
import DeleteUserPage from "./pages/DeleteUser";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import Protected from "./components/Protected";
import NonProtected from "./components/NonProtected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Navbar />
        <HomePage />
      </Protected>
    ),
  },
  {
    path: "/register",
    element: (
      <NonProtected>
        <Container className="mt-5">
          <Register />
        </Container>
      </NonProtected>
    ),
  },
  {
    path: "/login",
    element: (
      <NonProtected>
        <Container className="mt-5">
          <LoginPage />
        </Container>
      </NonProtected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <ProfilePage className="mt-5" />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/edit-profile",
    element: (
      <Protected>
        <Navbar className="mb-5" />
        <Container className="mt-5">
          <EditProfilePage />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/delete-user",
    element: (
      <Protected>
        <Navbar className="mb-5" />
        <Container className="mt-5">
          <DeleteUserPage />
        </Container>
      </Protected>
    ),
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
