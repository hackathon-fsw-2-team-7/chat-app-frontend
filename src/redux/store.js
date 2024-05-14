import {configureStore} from "@reduxjs/toolkit";
import rootReducers from "./reducers/index.js";

export default configureStore({
    reducer: rootReducers,
    devTools: import.meta.env.MODE === "development",
});
