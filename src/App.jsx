import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Profile from "./pages/ProfilePage";

import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
