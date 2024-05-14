import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import AppRoutes from "./utils/constants/appRoutes.js";

const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <HomePage />,
  },
  {
    path: AppRoutes.REGISTER,
    element: <Register />,
  },
  {
    path: AppRoutes.LOGIN,
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
