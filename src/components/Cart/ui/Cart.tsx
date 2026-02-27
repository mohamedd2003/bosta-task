"use client"

import { useState, useEffect } from "react"
import { Trash2 } from "lucide-react"
import { useCartStore } from "@/store/useCartStore"
import toast from "react-hot-toast"
import { CartSkeleton } from "./CartSkeleton"
import { EmptyCart } from "./EmptyCart"
import { CartItemCard } from "./CartItemCard"
import { OrderSummary } from "./OrderSummary"

export default function Cart() {
    const items = useCartStore((state) => state.items)
    const clearCart = useCartStore((state) => state.clearCart)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <CartSkeleton />

    if (items.length === 0) return <EmptyCart />

    const totalItems = items.reduce((total, item) => total + item.quantity, 0)
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <div className="min-h-[60vh] bg-zinc-50/50 dark:bg-zinc-950">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

                {/* ── Header ── */}
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
                            Shopping Cart
                        </h1>
                        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            clearCart()
                            toast.success("Cart cleared", {
                                position: "top-center",
                                style: {
                                    borderRadius: '12px',
                                    background: '#333',
                                    color: '#fff',
                                },
                            })
                        }}
                        className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-zinc-400 transition-all hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950/30 dark:hover:text-red-400"
                    >
                        <Trash2 className="h-4 w-4" />
                        Clear All
                    </button>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    {/* ── Cart Items List ── */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Column headers (desktop) */}
                        <div className="hidden rounded-xl bg-zinc-100/80 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 sm:grid sm:grid-cols-12 sm:gap-4 dark:bg-zinc-900/80 dark:text-zinc-400">
                            <span className="col-span-6">Product</span>
                            <span className="col-span-2 text-center">Quantity</span>
                            <span className="col-span-2 text-center">Price</span>
                            <span className="col-span-2 text-right">Total</span>
                        </div>

                        {items.map((item) => (
                            <CartItemCard key={item.id} item={item} />
                        ))}
                    </div>

                    {/* ── Order Summary ── */}
                    <div className="lg:col-span-1">
                        <OrderSummary totalItems={totalItems} totalPrice={totalPrice} />
                    </div>
                </div>
            </div>
        </div>
    )
}
