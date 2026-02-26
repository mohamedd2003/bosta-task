"use client"

import { useCallback, useState } from "react"
import { useSWRConfig } from "swr"
import { addProduct } from "../Services/AddProductForm.service"
import { ProductDto } from "../types/AddProductForm.types"
import { toast } from "react-hot-toast"

export function useAddProductForm() {
    const { mutate } = useSWRConfig()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleAddProduct = useCallback(async (product: ProductDto) => {
        setIsSubmitting(true)
        try {
            await addProduct(product)
            toast.success("Product added successfully!")
            mutate("products") // Revalidate global products cache
        } catch (error) {
            toast.error("Failed to add product")
            throw error
        } finally {
            setIsSubmitting(false)
        }
    }, [mutate])

    return {
        handleAddProduct,
        isSubmitting,
    }
}
