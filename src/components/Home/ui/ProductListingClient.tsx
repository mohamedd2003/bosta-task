"use client"

import { useProductCard } from "@/components/ProductCard/hooks/useProductCard"
import { ProductCardSkeletonGrid } from "@/components/ProductCard/ui/ProductCardSkeleton"
import { ProductToolbar } from "@/components/Home/ui/ProductToolbar"
import { ProductGrid } from "@/components/Home/ui/ProductGrid"
import { Pagination } from "@/components/Home/ui/Pagination"
import { ErrorState, EmptyState } from "@/components/Home/ui/StatesFeedback"

interface ProductListingProps {
    isHomePage?: boolean
}

export function ProductListingClient({ isHomePage = false }: ProductListingProps) {
    const {
        products,
        allProductsCount,
        isLoading,
        error,
        isEmpty,
        sortBy,
        handleSortChange,
        categories,
        selectedCategory,
        handleCategoryChange,
        currentPage,
        totalPages,
        goToPage,
        productsPerPage,
    } = useProductCard(isHomePage)

    return (
        <section id="products" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Featured Products
                </h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    Browse and sort through our full catalog
                </p>
            </div>

            <ProductToolbar
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                sortBy={sortBy}
                onSortChange={handleSortChange}
            />

            {error ? (
                <ErrorState />
            ) : isLoading ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <ProductCardSkeletonGrid count={8} />
                </div>
            ) : isEmpty ? (
                <EmptyState />
            ) : products.length > 0 ? (
                <>
                    <ProductGrid
                        products={products}
                        currentPage={currentPage}
                        productsPerPage={productsPerPage}
                        allProductsCount={allProductsCount}
                    />
                    {totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={goToPage}
                        />
                    )}
                </>
            ) : null}
        </section>
    )
}
