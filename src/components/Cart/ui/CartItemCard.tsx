"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCartStore } from "@/store/useCartStore"
import toast from "react-hot-toast"

interface CartItemCardProps {
    item: {
        id: number
        title: string
        price: number
        image: string
        category: string
        quantity: number
    }
}

export function CartItemCard({ item }: CartItemCardProps) {
    const { removeItem, updateQuantity } = useCartStore()

    const handleRemove = () => {
        removeItem(item.id)
        toast.success("Removed from cart", {
            position: "bottom-center",
            style: {
                borderRadius: '12px',
                background: '#333',
                color: '#fff',
            },
        })
    }

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-12 sm:items-center sm:gap-4">
                {/* Product Info */}
                <div className="col-span-6 flex items-center gap-4">
                    <Link
                        href={`/products/${item.id}`}
                        className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 p-2 transition-transform hover:scale-105 sm:h-24 sm:w-24 dark:border-zinc-800 dark:bg-zinc-800"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={96}
                            height={96}
                            className="h-full w-full object-contain"
                        />
                    </Link>
                    <div className="min-w-0 flex-1">
                        <Link
                            href={`/products/${item.id}`}
                            className="line-clamp-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-primary dark:text-zinc-100"
                        >
                            {item.title}
                        </Link>
                        <p className="mt-1 text-xs capitalize text-zinc-400 dark:text-zinc-500">
                            {item.category}
                        </p>
                        <p className="mt-1 text-sm font-bold text-zinc-700 sm:hidden dark:text-zinc-300">
                            ${item.price.toFixed(2)}
                        </p>
                    </div>
                </div>

                {/* Quantity Controls */}
                <div className="col-span-2 flex items-center justify-center">
                    <div className="flex items-center gap-1 rounded-xl border border-zinc-200 bg-zinc-50 p-1 dark:border-zinc-700 dark:bg-zinc-800">
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-all hover:bg-white hover:text-zinc-900 hover:shadow-sm active:scale-95 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                            aria-label="Decrease quantity"
                        >
                            <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="flex h-8 w-10 items-center justify-center text-sm font-bold text-zinc-900 dark:text-zinc-100">
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-all hover:bg-white hover:text-zinc-900 hover:shadow-sm active:scale-95 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                            aria-label="Increase quantity"
                        >
                            <Plus className="h-3.5 w-3.5" />
                        </button>
                    </div>
                </div>

                {/* Unit Price */}
                <div className="col-span-2 hidden text-center sm:block">
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        ${item.price.toFixed(2)}
                    </span>
                </div>

                {/* Line Total */}
                <div className="col-span-2 hidden text-right sm:block">
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        ${(item.price * item.quantity).toFixed(2)}
                    </span>
                </div>

                {/* Mobile total + remove */}
                <div className="flex items-center justify-between sm:hidden">
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                        onClick={handleRemove}
                        className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-red-500 transition-all hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                        <Trash2 className="h-3.5 w-3.5" />
                        Remove
                    </button>
                </div>
            </div>

            {/* Desktop Remove Button */}
            <button
                onClick={handleRemove}
                className="absolute right-3 top-3 hidden h-8 w-8 items-center justify-center rounded-lg text-zinc-300 opacity-0 transition-all hover:bg-red-50 hover:text-red-500 group-hover:opacity-100 sm:flex dark:text-zinc-600 dark:hover:bg-red-950/30 dark:hover:text-red-400"
                aria-label={`Remove ${item.title} from cart`}
            >
                <Trash2 className="h-4 w-4" />
            </button>
        </div>
    )
}
