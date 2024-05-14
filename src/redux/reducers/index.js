import {combineReducers} from "@reduxjs/toolkit";
import messageReducer from "./messageReducer.js";

export default combineReducers({
    message: messageReducer,
});