import axios from "axios"
import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./actionType"
const api = axios.create({
    baseURL: `http://localhost:8080`
})
export const userRegister = (userData) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST })
    try {
        const res = await api.post(`/api/user/register`, userData)
        dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data })
        // console.log(res);
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAILED, payload: error });
    }
}
export const userLogin = (userCreds) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST })
    try {
        const res = await api.post(`/api/user/login`, userCreds)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data })
        // console.log(res);
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILED, payload: error })
    }
}