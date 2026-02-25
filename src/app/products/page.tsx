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
                <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <nav className="flex items-center gap-2 text-sm text-zinc-500">
                        <a href="/" className="hover:text-primary transition-colors">Home</a>
                        <span className="text-zinc-300">/</span>
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">Products</span>
                    </nav>
                    <a
                        href="/products/add"
                        className="bg-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition-all hover:-translate-y-0.5"
                    >
                        <span>Add Product</span>
                    </a>
                </div>
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
