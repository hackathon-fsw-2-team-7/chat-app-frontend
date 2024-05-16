import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import ProfilePage from "./pages/ProfilePage";

import HomePage from "./pages/Home";
import Register from "./pages/Register";
import LoginPage from "./pages/Login";

import Protected from "./components/Protected";
import NonProtected from "./components/NonProtected";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";

import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <Protected>
      <HomePage />
      // </Protected>
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
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
