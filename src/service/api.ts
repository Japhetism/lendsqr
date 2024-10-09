import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

type MethodTypes = 
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE"


const BASE_URL = "https://run.mocky.io/v3";


// Variables for rate limiting
let requestCount = 0;
const MAX_REQUESTS_PER_SECOND = 5;
const REQUEST_INTERVAL = 1000;
let lastRequestTime = 0;

export const api = async <T> (
    endpoint: string,
    method: MethodTypes,
    payload?: any,
    headers?: any
): Promise<any> => {

    const url = `${BASE_URL}/${endpoint}`;

    const accessToken = Cookies.get("accessToken");
    
    // logic for rate limiting
    const now = Date.now();
    if (now - lastRequestTime > REQUEST_INTERVAL) {
        requestCount = 0;
        lastRequestTime = now;
    }

    if (requestCount >= MAX_REQUESTS_PER_SECOND) {
        await new Promise(resolve => setTimeout(resolve, REQUEST_INTERVAL));
    }

    requestCount++;
    
    const config: AxiosRequestConfig = {
        method: method,
        url: url,
        data: payload,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            ...headers
        },
        timeout: 600000
    }

    try {
        const response = await axios(config);
        return response.data
    } catch (error: any) {
        const errorResponse = error?.response?.data?.message || "An unknown error occurred";
        throw new Error(errorResponse);
    }
}
