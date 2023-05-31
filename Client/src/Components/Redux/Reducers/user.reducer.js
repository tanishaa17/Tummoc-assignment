import { USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Actions/actionTypes";

const initialState = {
    userData: [],
    isLoading: false,
    isError: true
}
export const userReducer = (state = initialState, { type, payload }) => {
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
                isError: true
            }

        default:
            return state;
    }
}