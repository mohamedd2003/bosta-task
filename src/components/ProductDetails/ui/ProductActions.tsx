"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

import { useCartStore } from "@/store/useCartStore"
import { ProductCard } from "../../ProductCard/types/ProductCard.types"
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
            position: "top-center",
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


        </div>
    )
}
