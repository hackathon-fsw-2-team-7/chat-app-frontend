import {toast} from "react-toastify";
import axios from "axios";
import {setMessages} from "../reducers/messageReducer.js";
import AppSecret from "../../utils/appSecret.js";

export const getAllMessages = () => async (dispatch) => {
    try {
        const response = await axios.get(`${AppSecret.BACKEND_BASE_API}/messages`);
        const {data} = response.data;

        dispatch(setMessages(data));
    } catch (err) {
        toast.error(err?.response?.data?.message);
    }
}

export const addMessage = (payload) => async (dispatch, getState) => {
    if (!payload) {
        return;
    }

    try {
        const response = await axios.post(`${AppSecret.BACKEND_BASE_API}/messages`, {
            body: payload,
            createdBy: "user1", // only for now due to no auth implemented
        });
        const {data} = response.data;
        const {messages} = getState().message;
        const newMessages = [...messages, data];

        dispatch(setMessages(newMessages));
        toast.success("Message added successfully.");
    } catch (err) {
        toast.error(err?.response?.data?.message);
    }
}