import { ProductsHeader } from "@/components/ProductCard/ui/ProductsHeader"
import { ProductListingClient } from "@/components/Home/ui/ProductListingClient"
import { Suspense } from "react"

export const metadata = {
    title: "All Products | BOSTA",
    description: "Browse our full catalog of premium products.",
}

export default function ProductsPage() {
    return (
        <div className="bg-zinc-50/50 dark:bg-zinc-950 min-h-screen pt-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ProductsHeader />
            </div>

            <Suspense fallback={
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="h-8 w-48 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800 mb-8" />
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-80 w-full animate-pulse rounded-2xl bg-zinc-100 dark:bg-zinc-900" />
                        ))}
                    </div>
                </div>
            }>
                <ProductListingClient />
            </Suspense>
        </div>
    )
}
