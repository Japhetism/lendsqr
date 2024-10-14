export interface IApiResponse  {
    statusCode: number;
    message: string;
    hasError: boolean;
    data: null | any;
}

export interface IInitialState {
    responseData: any;
    status: "idle" | "pending" | "success" | "error";
    error: string | null;
    isLoading: boolean;
}