import axios from "axios"
import { USER_LOGOUT, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./actionType"
const api = axios.create({
    baseURL: `https://fair-puce-agouti-suit.cyclic.app/`
})
export const userRegister = (userData) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST })
    try {
        const res = await api.post(`/user/register`, userData)
        dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data })
        alert(`Registered successfully`)
        window.location.href = "/login"
        // console.log(res);
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAILED, payload: error });
        alert(error.response.data.message)

    }
}
export const userLogin = (userCreds) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST })
    try {
        const res = await api.post(`/user/login`, userCreds)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data })
        alert(`Logged in successfully`)
        window.location.href = "/"
        // console.log(res);
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILED, payload: error })
        alert(error.response.data.message)
        // console.log(error)
    }
}

export const userLogout = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT })
}