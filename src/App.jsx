import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import AppRoutes from "./utils/appRoutes.js";
import {Provider} from "react-redux";
import store from "./redux/store.js";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import AppNavbar from "./components/AppNavbar.jsx";

const router = createBrowserRouter([
    {
        path: AppRoutes.HOME,
        element: (
            <>
                <AppNavbar/>
                <HomePage/>
            </>
        ),
    },
    {
        path: AppRoutes.REGISTER,
        element: (
            <>
                <Register/>
            </>
        ),
    },
    {
        path: AppRoutes.LOGIN,
        element: (
            <>
                <LoginPage/>
            </>
        ),
    },
]);

export default function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router}/>
                <ToastContainer theme={"colored"}/>
            </Provider>
        </>
    );
}
