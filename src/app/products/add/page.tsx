import { AddProductForm } from "@/components/AddProductForm/ui/AddProductForm"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Suspense } from "react"

export const metadata = {
    title: "Add New Product | BOSTA",
    description: "Expand your catalog by adding a new premium product.",
}

export default function AddProductPage() {
    return (
        <div className="bg-zinc-50/50 dark:bg-zinc-950 min-h-screen py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ── Header & Navigation ── */}
                <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <Link
                            href="/products"
                            className="text-zinc-500 hover:text-primary mb-2 flex items-center gap-1 text-sm font-medium transition-colors"
                        >
                            <ChevronLeft className="h-4 w-4" />
                            Back to Products
                        </Link>
                        <h1 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                            Add New Product
                        </h1>
                    </div>
                </div>

                {/* ── Form Section ── */}
                <div className="flex justify-center">
                    <Suspense fallback={<div>Loading form...</div>}>
                        <AddProductForm />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
