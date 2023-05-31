import axios from "axios"
import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./actionTypes"

export const userRegister = (userData) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST })
    try {
        const res = await axios.post(`/api/user/register`, { userData })
        dispatch({ type: USER_REGISTER_SUCCESS })
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAILED, payload: error });
    }
}
export const userLogin = (userData) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST })
    try {
        const res = await axios.post(`/api/user/login`, { userData })
        dispatch({ type: USER_LOGIN_SUCCESS })
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILED, payload: error })
    }
}