"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

import { useCartStore } from "@/store/useCartStore"
import { ProductCard } from "../types/ProductCard.types"
import { toast } from "react-hot-toast"

interface ProductActionsProps {
    product: ProductCard
}

export function ProductActions({ product }: ProductActionsProps) {
    const [isWishlisted, setIsWishlisted] = useState(false)
    const [addedToCart, setAddedToCart] = useState(false)
    const { addItem } = useCartStore()

    const handleAddToCart = () => {
        addItem(product)
        setAddedToCart(true)
        toast.success(`${product.title} added to cart!`, {
            position: "bottom-center",
            style: {
                borderRadius: '12px',
                background: '#333',
                color: '#fff',
            },
        })
        setTimeout(() => setAddedToCart(false), 2000)
    }

    return (
        <div className="flex gap-3 pt-2">
            {/* Add to Cart */}
            <Button
                size="lg"
                onClick={handleAddToCart}
                className={`flex-1 rounded-xl text-white shadow-sm transition-all hover:shadow-md ${addedToCart
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-primary hover:bg-primary/90"
                    }`}
            >
                {addedToCart ? (
                    <>
                        <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Added!
                    </>
                ) : (
                    <>
                        <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-5.98.572m5.98-.572h9m-9 0a3 3 0 01-5.98.572M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM15.75 14.25l2.394-8.978M15.75 14.25H7.5m8.25 0a3 3 0 105.98.572m-5.98-.572a3 3 0 005.98.572" />
                        </svg>
                        Add to Cart
                    </>
                )}
            </Button>

            {/* Wishlist */}
            <Button
                size="lg"
                variant="outline"
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                className={`rounded-xl transition-all ${isWishlisted
                    ? "border-red-300 bg-red-50 text-red-500 hover:border-red-400 hover:bg-red-100 dark:border-red-700 dark:bg-red-950/30 dark:hover:bg-red-950/50"
                    : "border-zinc-200 hover:border-primary hover:text-primary dark:border-zinc-700"
                    }`}
            >
                <svg
                    className="h-5 w-5 transition-transform hover:scale-110"
                    viewBox="0 0 24 24"
                    fill={isWishlisted ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth={isWishlisted ? 0 : 1.5}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                </svg>
            </Button>
        </div>
    )
}
