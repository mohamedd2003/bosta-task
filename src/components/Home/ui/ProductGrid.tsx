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
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}
