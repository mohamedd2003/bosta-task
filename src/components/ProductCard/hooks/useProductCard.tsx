"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import useSWR, { useSWRConfig } from "swr"
import { getAllProducts, addProduct } from "../services/ProductCard.service"
import { ProductCard, ProductDto } from "../types/ProductCard.types"
import { toast } from "react-hot-toast"

export type SortOption = "default" | "price-asc" | "price-desc" | "category"

const PRODUCTS_PER_PAGE = 10

export function useProductCard() {
    const { mutate: globalMutate } = useSWRConfig()
    // ---------- Data fetching ----------
    const { data: products, error, isLoading, mutate: localMutate } = useSWR<ProductCard[]>(
        "products",
        getAllProducts
    )

    // ---------- Sorting ----------
    const [sortBy, setSortBy] = useState<SortOption>("default")

    // ---------- Category filter ----------
    const categories = useMemo(() => {
        if (!products) return []
        const unique = [...new Set(products.map((p) => p.category))]
        return unique.sort()
    }, [products])

    const searchParams = useSearchParams()
    const initialCategory = searchParams.get("category") || "all"

    const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory)

    // Update category when URL changes
    useEffect(() => {
        const cat = searchParams.get("category")
        if (cat) {
            setSelectedCategory(cat)
        } else {
            setSelectedCategory("all")
        }
    }, [searchParams])

    // ---------- Pagination ----------
    const [currentPage, setCurrentPage] = useState(1)

    // ---------- Derived data (filter → sort → paginate) ----------
    const processedProducts = useMemo(() => {
        if (!products) return []

        // 1. Filter by category
        let filtered = products
        if (selectedCategory !== "all") {
            filtered = products.filter((p) => p.category === selectedCategory)
        }

        // 2. Sort
        const sorted = [...filtered]
        switch (sortBy) {
            case "price-asc":
                sorted.sort((a, b) => a.price - b.price)
                break
            case "price-desc":
                sorted.sort((a, b) => b.price - a.price)
                break
            case "category":
                sorted.sort((a, b) => a.category.localeCompare(b.category))
                break
            default:
                break
        }

        return sorted
    }, [products, sortBy, selectedCategory])

    // ---------- Paginated slice ----------
    const totalPages = Math.max(1, Math.ceil(processedProducts.length / PRODUCTS_PER_PAGE))

    // Reset to page 1 when filters/sort change
    const safeCurrentPage = currentPage > totalPages ? 1 : currentPage

    const paginatedProducts = useMemo(() => {
        const start = (safeCurrentPage - 1) * PRODUCTS_PER_PAGE
        return processedProducts.slice(start, start + PRODUCTS_PER_PAGE)
    }, [processedProducts, safeCurrentPage])

    // ---------- Actions ----------
    const handleSortChange = useCallback((option: SortOption) => {
        setSortBy(option)
        setCurrentPage(1)
    }, [])

    const handleCategoryChange = useCallback((category: string) => {
        setSelectedCategory(category)
        setCurrentPage(1)
    }, [])

    const goToPage = useCallback(
        (page: number) => {
            if (page >= 1 && page <= totalPages) {
                setCurrentPage(page)
            }
        },
        [totalPages]
    )

    const handleAddProduct = useCallback(async (product: ProductDto) => {
        try {
            await addProduct(product)
            toast.success("Product added successfully!")
            localMutate() // Revalidate local products
        } catch (error) {
            toast.error("Failed to add product")
            throw error
        }
    }, [localMutate])

    return {
        // Data
        products: paginatedProducts,
        allProductsCount: processedProducts.length,

        // State
        isLoading,
        error,
        isEmpty: !isLoading && !error && paginatedProducts.length === 0,

        // Sorting
        sortBy,
        handleSortChange,

        // Category filter
        categories,
        selectedCategory,
        handleCategoryChange,

        // Pagination
        currentPage: safeCurrentPage,
        totalPages,
        goToPage,
        productsPerPage: PRODUCTS_PER_PAGE,

        // Mutations
        handleAddProduct,
    }
}
