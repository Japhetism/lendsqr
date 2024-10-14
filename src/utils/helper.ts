import { IInitialState } from "../interfaces/api";

export const defaultErrorMessage = "An unknown error occurred";

export const initialState: IInitialState = {
    responseData: null,
    status: "idle",
    error: null,
    isLoading: false,
}