import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Actions/actionType";

const initialState = {
    userData: [],
    isLoading: false,
    isError: false
}
export const registerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: payload
            }
        case USER_REGISTER_FAILED:
            return {
                ...state,
                isError: payload
            }

        default:
            return state;
    }
}
export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN_REQUEST:
            return {
                isLoading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                isLoading: false,
                currentUser: payload
            }
        case USER_LOGIN_FAILED:
            return {
                isError: payload
            }

        default:
            return state;
    }
}