import { AxiosError } from "axios";

export const handleResponse = <T>(response: T): T => {
    return response;
};


export const handleErr = (error: unknown, context: string): never => {
    if (error instanceof AxiosError) {
        console.log(`Error ${context}:`, {
            message: error.message,
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
        });
    } else {
        console.error(`Error ${context}:`, error);
    }
    throw error;
};
