import { ProductCard } from "@/components/ProductCard/types/ProductCard.types";
import apiClient from "@/lib/networking/apiHandler";
import { handleErr, handleResponse } from "@/lib/networking/responseHandler";

export const getProductById = async (id: number): Promise<ProductCard> => {
    try {
        const {data} = await apiClient.get<ProductCard>(`/products/${id}`);
        return handleResponse(data as ProductCard);
    } catch (error) {
        return handleErr(error, "fetching products Details");
    }
}