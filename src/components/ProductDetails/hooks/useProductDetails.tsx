"use client"

import useSWR from "swr"
import { getProductById } from "../services/ProductDetails.service"
import { ProductCard } from "@/components/ProductCard/types/ProductCard.types"

export function useProductDetail(id: number) {
    const { data: product, error, isLoading } = useSWR<ProductCard>(
        id ? `product-${id}` : null,
        () => getProductById(id)
    )

    return {
        product,
        isLoading,
        error,
    }
}
