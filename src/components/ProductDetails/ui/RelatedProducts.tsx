"use client"

import useSWR from "swr"
import { getAllProducts } from "../../ProductCard/services/ProductCard.service"
import { ProductCard } from "../../ProductCard/ui/ProductCard"
import { ProductCardSkeletonGrid } from "../../ProductCard/ui/ProductCardSkeleton"

interface RelatedProductsProps {
    currentProductId: number
    category: string
}

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
    const { data: allProducts, isLoading, error } = useSWR(
        "all-products",
        getAllProducts
    )

    if (isLoading) {
        return (
            <section className="mt-20 border-t border-zinc-100 pt-16 dark:border-zinc-800">
                <div className="mb-8">
                    <div className="h-8 w-48 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                    <div className="mt-2 h-4 w-64 animate-pulse rounded-lg bg-zinc-100 dark:bg-zinc-900" />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <ProductCardSkeletonGrid count={4} />
                </div>
            </section>
        )
    }

    if (error || !allProducts) return null

    // Filter by category and exclude current product
    const related = allProducts
        .filter(p => p.category === category && p.id !== currentProductId)
        .slice(0, 4)

    if (related.length === 0) return null

    return (
        <section className="mt-20 border-t border-zinc-100 pt-16 dark:border-zinc-800">
            <div className="mb-8 flex items-end justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Related Products
                    </h2>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                        You might also like these products from the same category
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {related.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}
