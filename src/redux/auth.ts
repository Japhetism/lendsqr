import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { ILogin } from "../interfaces/login";
import { IApiResponse } from "../interfaces/api";
import { api } from "../service/api";
import { defaultErrorMessage, initialState } from "../utils/helper";

export const userLogin = createAsyncThunk("/login", async (user: ILogin) => {
    const response = await api<any>("da760f6d-6068-48df-a918-1ebcb78080b1", "GET", user);
    return response;
});

export const authSlice = createSlice ({
    name: "auth",
    initialState: initialState,
    reducers: {
        logout: (state) => {
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
            state.responseData = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
                state.error = null;
                state.responseData = undefined;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.responseData = action.payload;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = "error";
                state.isLoading = false;
                state.responseData = undefined;
                const errorPayload = action?.error as IApiResponse;
                state.error = errorPayload?.message || defaultErrorMessage;
            })       
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;

