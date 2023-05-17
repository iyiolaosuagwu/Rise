import {
    CREATE_PLAN_FAILED,
    CREATE_PLAN_SUCCESS,
    LOADING,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_FAILED,
} from "./types";

const initialState = {
    isAuthenticated: null,
    plans: [],
    loading: false,
    user: null,
    error: null,
};

function appReducer(state = initialState, action: any) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: payload,
            };
        case LOGIN_USER_FAILED:
        case REGISTER_USER_FAILED:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: payload,
            };
        case CREATE_PLAN_SUCCESS:
            return {
                ...state,
                plans: payload,
                error: payload,
            };
        case CREATE_PLAN_FAILED:
            return {
                ...state,
                error: payload,
            };
        case LOADING:
            return {
                ...state,
                loading: payload,
            };
        default:
            return state;
    }
}

export default appReducer;
