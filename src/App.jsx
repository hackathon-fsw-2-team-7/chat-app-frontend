import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";

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
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;