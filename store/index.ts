import { createStore, applyMiddleware, combineReducers } from "redux";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import thunk from "redux-thunk";
import appReducer from "./reducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    combineReducers({
        appReducer,
    }),
    initialState,
    applyMiddleware(...middleware)
);

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
