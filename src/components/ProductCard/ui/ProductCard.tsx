"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ProductCard as ProductCardType } from "../types/ProductCard.types"
import Image from "next/image"
import { useCartStore } from "@/store/useCartStore"
import { toast } from "react-hot-toast"
import { ShoppingCart, Check } from "lucide-react"

// ── Dynamic category color: hash-based, no static data ──
const colorPalette = [
  { bg: "bg-blue-50 dark:bg-blue-950/30", text: "text-blue-600 dark:text-blue-400" },
  { bg: "bg-purple-50 dark:bg-purple-950/30", text: "text-purple-600 dark:text-purple-400" },
  { bg: "bg-emerald-50 dark:bg-emerald-950/30", text: "text-emerald-600 dark:text-emerald-400" },
  { bg: "bg-pink-50 dark:bg-pink-950/30", text: "text-pink-600 dark:text-pink-400" },
  { bg: "bg-amber-50 dark:bg-amber-950/30", text: "text-amber-600 dark:text-amber-400" },
  { bg: "bg-cyan-50 dark:bg-cyan-950/30", text: "text-cyan-600 dark:text-cyan-400" },
]

function getCategoryColor(category: string) {
  let hash = 0
  for (let i = 0; i < category.length; i++) {
    hash = category.charCodeAt(i) + ((hash << 5) - hash)
  }
  const index = Math.abs(hash) % colorPalette.length
  return colorPalette[index]
}

interface ProductCardProps {
  product: ProductCardType
}

export function ProductCard({ product }: ProductCardProps) {
  const [addedToCart, setAddedToCart] = useState(false)
  const { addItem, removeItem, items } = useCartStore()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const color = getCategoryColor(product.category)
  const isAdded = (isMounted && items.some(item => item.id === product.id)) || addedToCart

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border-zinc-100 pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50 dark:border-zinc-800 dark:hover:shadow-zinc-900/50">
      {/* ── Image ── */}
      <Link
        href={`/products/${product.id}`}
        className="relative flex aspect-4/3 items-center justify-center overflow-hidden bg-zinc-50 p-6 dark:bg-zinc-900"
      >
        <Image
          src={product.image}
          alt={product.title}
          className="h-full max-h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width={200}
          height={200}
        />
        <div className="absolute inset-0 bg-zinc-900/0 transition-colors duration-300 group-hover:bg-zinc-900/5 dark:group-hover:bg-white/5" />
      </Link>



      {/* ── Content ── */}
      <CardHeader className="flex-1 gap-3">
        {/* Colored Category Badge */}
        <span
          className={`w-fit rounded-full px-2.5 py-0.5 text-[11px] font-semibold capitalize ${color.bg} ${color.text}`}
        >
          {product.category}
        </span>

        <Link href={`/products/${product.id}`} className="group/title">
          <CardTitle className="line-clamp-2 text-sm leading-snug transition-colors group-hover/title:text-primary">
            {product.title}
          </CardTitle>
        </Link>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-3.5 w-3.5 ${i < Math.round(product.rating.rate)
                    ? "text-amber-400"
                    : "text-zinc-200 dark:text-zinc-700"
                    }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-zinc-400 dark:text-zinc-500">
              ({product.rating.count})
            </span>
          </div>
        )}

        {/* Price */}
        <p className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
          ${product.price.toFixed(2)}
        </p>
      </CardHeader>

      {/* ── Footer ── */}
      <CardFooter className="flex gap-2 pt-0">
        <Button
          variant="outline"
          className="flex-1 rounded-lg border-zinc-200 font-medium transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-zinc-700 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
          asChild
        >
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault()
            if (isAdded) {
              removeItem(product.id)
              setAddedToCart(false)
              toast.success(`Removed from cart!`, {
                position: "top-center",
                style: {
                  borderRadius: '12px',
                  background: '#333',
                  color: '#fff',
                },
              })
            } else {
              addItem(product)
              setAddedToCart(true)
              toast.success(`Added to cart!`, {
                position: "top-center",
                style: {
                  borderRadius: '12px',
                  background: '#333',
                  color: '#fff',
                },
              })
              setTimeout(() => setAddedToCart(false), 1500)
            }
          }}
          className={`px-3 rounded-lg transition-all ${isAdded
            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
            : "bg-primary hover:bg-primary/90 text-white"
            }`}
          aria-label="Add to cart"
        >
          {isAdded ? (
            <Check className="h-4 w-4" />
          ) : (
            <ShoppingCart className="h-4 w-4" />
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
