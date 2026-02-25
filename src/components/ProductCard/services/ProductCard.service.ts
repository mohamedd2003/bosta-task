import apiClient from "@/lib/networking/apiHandler";
import { handleResponse, handleErr } from "@/lib/networking/responseHandler";
import { ProductCard, ProductDto } from "../types/ProductCard.types";

export const getAllProducts = async (): Promise<ProductCard[]> => {
    try {
        const { data } = await apiClient.get<ProductCard[]>('/products');
        return handleResponse(data as ProductCard[]);
    } catch (error) {
        return handleErr(error, "fetching products");
    }
}

export const getProductById = async (id: number): Promise<ProductCard> => {
    try {
        const { data } = await apiClient.get<ProductCard>(`/products/${id}`);
        return handleResponse(data as ProductCard);
    } catch (error) {
        return handleErr(error, "fetching products");
    }
}

export const addProduct = async (product: ProductDto): Promise<ProductCard> => {
    try {
        const { data } = await apiClient.post<ProductCard>(`/products`, product);
        return handleResponse(data as ProductCard);
    } catch (error) {
        return handleErr(error, "adding product");
    }
}

