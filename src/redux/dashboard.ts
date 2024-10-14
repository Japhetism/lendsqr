import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin } from "../interfaces/login";
import { IApiResponse } from "../interfaces/api";
import { api } from "../service/api";
import { defaultErrorMessage, initialState } from "../utils/helper";

export const fetchDashboardData = createAsyncThunk("/dashboard", async () => {
    const response = await api<any>("29fff3ea-c44a-4c98-92e2-7cbf3bb5cc74", "GET");
    return response;
});

export const dashboardSlice = createSlice ({
    name: "dashboard",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboardData.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.error = null;
                state.responseData = undefined;
            })
            .addCase(fetchDashboardData.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.responseData = action.payload;
            })
            .addCase(fetchDashboardData.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })       
    }
})

export default dashboardSlice.reducer;

