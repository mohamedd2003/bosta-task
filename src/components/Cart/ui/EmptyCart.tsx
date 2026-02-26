"use client"

import Link from "next/link"
import { ShoppingBag, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmptyCart() {
    return (
        <div className="min-h-[60vh] bg-zinc-50/50 dark:bg-zinc-950">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
                <div className="relative mb-8">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900">
                        <ShoppingBag className="h-16 w-16 text-zinc-300 dark:text-zinc-600" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-zinc-200 dark:border-zinc-950 dark:bg-zinc-800">
                        <Package className="h-5 w-5 text-zinc-400 dark:text-zinc-500" />
                    </div>
                </div>

                <h1 className="mb-3 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                    Your cart is empty
                </h1>
                <p className="mb-8 max-w-md text-center text-zinc-500 dark:text-zinc-400">
                    Looks like you haven&apos;t added anything to your cart yet. Browse our collection and find something you love!
                </p>

                <Link href="/">
                    <Button
                        size="lg"
                        className="rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-red-500/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl active:translate-y-0"
                    >
                        <ShoppingBag className="mr-2 h-5 w-5" />
                        Start Shopping
                    </Button>
                </Link>
            </div>
        </div>
    )
}
