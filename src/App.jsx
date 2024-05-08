import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Register } from "./pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
      path: "/",
      element: <Register />,
  },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;