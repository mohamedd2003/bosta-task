import { AxiosResponse, AxiosError } from "axios";

/**
 * Extracts and returns typed data from an Axios response.
 *
 * @template T - The expected shape of the response data.
 * @param response - The Axios response object.
 * @returns The response data cast to type T.
 *
 * @example
 * const response = await apiClient.get('/products');
 * return handleResponse<ProductCard[]>(response);
 */
export const handleResponse = <T>(response: T): T => {
    return response;
};

/**
 * Logs and re-throws API errors with a contextual message.
 *
 * @param error - The caught error (usually an AxiosError).
 * @param context - A human-readable label for the operation that failed (e.g. "fetching products").
 * @throws Always re-throws the original error after logging.
 *
 * @example
 * catch (error) {
 *   handleErr(error, "fetching products");
 * }
 */
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
