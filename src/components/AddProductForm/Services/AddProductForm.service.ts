import { handleErr, handleResponse } from "@/lib/networking/responseHandler";
import { ProductDto } from "../types/AddProductForm.types";
import apiClient from "@/lib/networking/apiHandler";

export const addProduct = async (product: ProductDto): Promise<ProductDto> => {
    try {
        const { data } = await apiClient.post<ProductDto>(`/products`, product);
        return handleResponse(data as ProductDto);
    } catch (error) {
        return handleErr(error, "adding product");
    }
}

