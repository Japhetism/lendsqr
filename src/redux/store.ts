import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import dashboardReducer from "./dashboard";

const store = configureStore({
    reducer: {
        auth: authReducer,
        dashboard: dashboardReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;