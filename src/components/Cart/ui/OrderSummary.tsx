"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface OrderSummaryProps {
    totalItems: number
    totalPrice: number
}

export function OrderSummary({ totalItems, totalPrice }: OrderSummaryProps) {
    const shippingCost = totalPrice >= 50 ? 0 : 5.99
    const finalTotal = totalPrice + shippingCost

    return (
        <div className="sticky top-24 overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="border-b border-zinc-100 px-6 py-4 dark:border-zinc-800">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    Order Summary
                </h2>
            </div>

            <div className="space-y-4 p-6">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500 dark:text-zinc-400">
                        Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})
                    </span>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                        ${totalPrice.toFixed(2)}
                    </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500 dark:text-zinc-400">Shipping</span>
                    {shippingCost === 0 ? (
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                            Free
                        </span>
                    ) : (
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                            ${shippingCost.toFixed(2)}
                        </span>
                    )}
                </div>

                {shippingCost > 0 && (
                    <div className="rounded-xl bg-amber-50 px-4 py-3 dark:bg-amber-950/30">
                        <p className="text-xs font-medium text-amber-700 dark:text-amber-400">
                            🚚 Add <span className="font-bold">${(50 - totalPrice).toFixed(2)}</span> more for free shipping!
                        </p>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-amber-200 dark:bg-amber-900">
                            <div
                                className="h-full rounded-full bg-amber-500 transition-all duration-500"
                                style={{ width: `${Math.min((totalPrice / 50) * 100, 100)}%` }}
                            />
                        </div>
                    </div>
                )}

                {shippingCost === 0 && (
                    <div className="rounded-xl bg-emerald-50 px-4 py-3 dark:bg-emerald-950/30">
                        <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                            ✨ You&apos;ve unlocked free shipping!
                        </p>
                    </div>
                )}

                <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

                <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-zinc-900 dark:text-zinc-50">
                        Total
                    </span>
                    <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                        ${finalTotal.toFixed(2)}
                    </span>
                </div>

                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-primary dark:text-zinc-400"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}
