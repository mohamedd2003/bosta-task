"use client"

import React, { Suspense } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ProductActions } from "@/components/ProductDetails/ui/ProductActions"
import { RelatedProducts } from "@/components/ProductDetails/ui/RelatedProducts"
import { ProductCardSkeletonGrid } from "@/components/ProductCard/ui/ProductCardSkeleton"
import { useProductDetail } from "../hooks/useProductDetails"
import { ProductDetailSkeleton } from "@/components/ProductDetails/ui/ProductDetailSkeleton"
import { notFound } from "next/navigation"

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

interface ProductDetailsProps {
    productId: number
}

export default function ProductDetails({ productId }: ProductDetailsProps) {
    const { product, isLoading, error } = useProductDetail(productId)

    if (isLoading) return <ProductDetailSkeleton />
    if (error || !product) return notFound()

    const color = getCategoryColor(product.category)

    return (
        <div className="bg-zinc-50/50 dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                {/* ── Breadcrumb ── */}
                <nav className="mb-8 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
                    <Link
                        href="/"
                        className="text-zinc-400 transition-colors hover:text-primary dark:text-zinc-500 dark:hover:text-primary"
                    >
                        Home
                    </Link>
                    <svg className="h-4 w-4 text-zinc-300 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <Link
                        href={`/?category=${product.category}`}
                        className="text-zinc-400 capitalize transition-colors hover:text-primary dark:text-zinc-500 dark:hover:text-primary"
                    >
                        {product.category}
                    </Link>
                    <svg className="h-4 w-4 text-zinc-300 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <span className="max-w-[200px] truncate font-medium text-zinc-700 dark:text-zinc-300">
                        {product.title}
                    </span>
                </nav>

                {/* ── Main Content Grid ── */}
                <div className="grid gap-10 lg:grid-cols-2">

                    {/* Image */}
                    <div className="group flex items-center justify-center overflow-hidden rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:p-12 dark:border-zinc-800 dark:bg-zinc-900">

                        <Image
                            src={product.image}
                            alt={product.title}
                            width={500}
                            height={500}
                            className="max-h-[420px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col gap-5">
                        <span
                            className={`w-fit rounded-full px-2.5 py-0.5 text-[11px] font-semibold capitalize ${color.bg} ${color.text}`}
                        >
                            {product.category}
                        </span>

                        <h1 className="text-2xl font-bold leading-snug tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
                            {product.title}
                        </h1>

                        {/* Rating */}
                        {product.rating && (
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`h-5 w-5 ${i < Math.round(product.rating.rate)
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
                                <span className="text-primary text-sm font-medium">
                                    {product.rating.rate}
                                </span>
                                <span className="text-sm text-zinc-400 dark:text-zinc-500">
                                    ({product.rating.count} reviews)
                                </span>
                            </div>
                        )}

                        {/* Price */}
                        <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                            ${product.price.toFixed(2)}
                        </span>

                        <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800" />

                        {/* Description */}
                        <div>
                            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Product Details
                            </h3>
                            <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {product.description}
                            </p>
                        </div>

                        <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800" />

                        {/* ── CSR boundary  — only Add to Cart + Wishlist need interactivity */}
                        <ProductActions
                            product={product}
                        />


                    </div>
                </div>

                {/* ── Related Products ── */}
                <RelatedProducts
                    currentProductId={product.id}
                    category={product.category}
                />

                {/* Back link */}
                <div className="mt-12 border-t border-zinc-100 pt-8 dark:border-zinc-800">
                    <Link
                        href="/"
                        className="hover:text-primary inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors dark:text-zinc-400"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Back to all products
                    </Link>
                </div>
            </div>
        </div>
    )
}