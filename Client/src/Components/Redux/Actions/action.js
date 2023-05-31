import axios from "axios"
import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./actionTypes"

export const userRegister = (userData) => (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST })
    try {
        axios.post(`/api/user/register`, { userData })
        dispatch({ type: USER_REGISTER_SUCCESS })
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAILED });
    }
}
export const userLogin = (userData) => (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST })
    try {
        axios.post(`/api/user/login`, { userData })
        dispatch({ type: USER_LOGIN_SUCCESS })
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILED })
    }
}