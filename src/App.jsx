import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import AppRoutes from "./utils/constants/appRoutes.js";
import {Provider} from "react-redux";
import store from "./redux/store.js";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {Container} from "react-bootstrap";

const router = createBrowserRouter([
    {
        path: AppRoutes.HOME,
        element: (
            <>
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
                <Container>
                    <RouterProvider router={router}/>
                </Container>
                <ToastContainer theme={"colored"}/>
            </Provider>
        </>
    );
}
