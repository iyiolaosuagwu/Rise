import axiosInstance from "../config/axios";
import { LOADING, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS } from "./types";

export const signin = (payload: any) => async (dispatch: any) => {
    dispatch({
        type: LOADING,
        payload: true,
    });
    try {
        const response: any = await axiosInstance.post("/sessions", payload);
        if (response?.token) {
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${response?.token}`;
        } else {
            delete axiosInstance.defaults.headers.common.Authorization;
        }
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: response.data,
        });
    } catch (error: any) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        dispatch({
            type: LOGIN_USER_FAILED,
            payload: message,
        });
    }
    dispatch({
        type: LOADING,
        payload: false,
    });
};

export const signup = async (payload: any) => {
    const response: any = await axiosInstance.post("/users", payload);
    return response;
};

export const createPlans = (payload: any) => async (dispatch: any) => {
    const response: any = await axiosInstance.post("/plans", payload);
    return response;
};

export const getPlan = async (id: number) => {
    const response: any = await axiosInstance.get(`/plans/${id}`);
    return response;
};

export const getPlans = async () => {
    const response: any = await axiosInstance.get("/plans");
    return response;
};

export const getSessions = async (payload: any) => {
    const response: any = await axiosInstance.get("/sessions");
    return response;
};

export const getPlanProjection = async (payload: any) => {
    const { monthly_investment, target_amount } = payload;
    const response: any = await axiosInstance.get(
        `/plans/projection?monthly_investment=${monthly_investment}&target_amount=${target_amount}`
    );
    return response;
};

export const getBanks = async () => {
    const response: any = await axiosInstance.get("/banks");
    return response;
};

export const getRates = async () => {
    const response: any = await axiosInstance.get("/rates");
    return response;
};

export const getquotes = async () => {
    const response: any = await axiosInstance.get("/quotes");
    return response;
};
