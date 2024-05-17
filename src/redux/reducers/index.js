import {combineReducers} from "@reduxjs/toolkit";
import messageReducer from "./messageReducer.js";
import auth from "./auth";

export default combineReducers({
    message: messageReducer,
  auth,
});