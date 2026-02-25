import { useState, useEffect } from "react"
import Link from "next/link"
import { Plus } from "lucide-react"
import cookies from "js-cookie"
import { ProductCard } from "@/components/ProductCard/ui/ProductCard"
import { ProductCard as ProductCardType } from "@/components/ProductCard/types/ProductCard.types"

interface ProductGridProps {
    products: ProductCardType[]
    currentPage: number
    productsPerPage: number
    allProductsCount: number
}

export function ProductGrid({
    products,
    currentPage,
    productsPerPage,
    allProductsCount,
}: ProductGridProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setIsLoggedIn(!!cookies.get("token"))
    }, [])

    return (
        <>
            {/* Result count */}
            <div className="mb-5 flex items-center justify-between">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Showing{" "}
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">
                        {(currentPage - 1) * productsPerPage + 1}–
                        {Math.min(currentPage * productsPerPage, allProductsCount)}
                    </span>{" "}
                    of{" "}
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">
                        {allProductsCount}
                    </span>{" "}
                    products
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* ── Add Product Placeholder ── */}
                {isLoggedIn && currentPage === 1 && (
                    <Link
                        href="/products/add"
                        className="group flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-zinc-200 bg-white/50 p-6 transition-all hover:border-primary/50 hover:bg-primary/[0.02] dark:border-zinc-800 dark:bg-zinc-950/50 dark:hover:border-primary/30"
                    >
                        <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                            <Plus className="text-primary h-8 w-8" />
                        </div>
                        <div className="text-center">
                            <span className="block text-lg font-bold text-zinc-900 dark:text-zinc-50">
                                Add Product
                            </span>
                            <span className="text-sm text-zinc-500">
                                Expand your catalog
                            </span>
                        </div>
                    </Link>
                )}

                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}
