"use client"

import { useCartStore } from "@/store/useCartStore"
import { useEffect, useState } from "react"
import Link from "next/link"
import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react"

interface CartDrawerProps {
    isOpen: boolean
    onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCartStore()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    if (!mounted) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed right-0 top-0 z-70 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-in-out dark:bg-zinc-950 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex h-full flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 dark:border-zinc-800">
                        <div className="flex items-center gap-2">
                            <ShoppingBag className="h-5 w-5 text-primary" />
                            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                                My Cart ({getTotalItems()})
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="rounded-full p-2 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Items List */}
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                        {items.length === 0 ? (
                            <div className="flex h-full flex-col items-center justify-center text-center">
                                <div className="mb-4 rounded-full bg-zinc-50 p-6 dark:bg-zinc-900">
                                    <ShoppingBag className="h-10 w-10 text-zinc-300" />
                                </div>
                                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                                    Your cart is empty
                                </h3>
                                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    Looks like you haven&apos;t added anything to your cart yet.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="mt-8 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
                                >
                                    Start Shopping
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 p-2 dark:border-zinc-800 dark:bg-zinc-900">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-full w-full object-contain"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col">
                                            <div className="flex justify-between gap-2">
                                                <Link
                                                    href={`/products/${item.id}`}
                                                    onClick={onClose}
                                                    className="line-clamp-1 text-sm font-semibold text-zinc-900 hover:text-primary dark:text-zinc-50"
                                                >
                                                    {item.title}
                                                </Link>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-zinc-400 hover:text-red-500"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                            <p className="mt-1 text-xs text-zinc-500 capitalize">
                                                {item.category}
                                            </p>
                                            <div className="mt-auto flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800"
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </button>
                                                    <span className="w-6 text-center text-sm font-medium">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800"
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </button>
                                                </div>
                                                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="border-t border-zinc-100 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-zinc-500">
                                    <span>Subtotal</span>
                                    <span>${getTotalPrice().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-zinc-500">
                                    <span>Shipping</span>
                                    <span className="text-emerald-500 font-medium">Free</span>
                                </div>
                                <div className="flex justify-between pt-2 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                                    <span>Total</span>
                                    <span>${getTotalPrice().toFixed(2)}</span>
                                </div>
                            </div>
                            <button className="mt-6 w-full rounded-full bg-primary py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
                                Proceed to Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
