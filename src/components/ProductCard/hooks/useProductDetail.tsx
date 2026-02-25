"use client"

import useSWR from "swr"
import { getProductById } from "../services/ProductCard.service"
import { ProductCard } from "../types/ProductCard.types"

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
