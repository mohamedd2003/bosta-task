// Fetches product data at request time on the server (SSR).
// Only ProductActions (Add to Cart, Wishlist) is a CSR boundary.

import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Suspense } from "react"
import { getProductById } from "@/components/ProductCard/services/ProductCard.service"
import { ProductActions } from "@/components/ProductCard/ui/ProductActions"
import { RelatedProducts } from "@/components/ProductCard/ui/RelatedProducts"
import { ProductCardSkeletonGrid } from "@/components/ProductCard/ui/ProductCardSkeleton"
import Image from "next/image"

interface ProductDetailPageProps {
    params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
    const { id } = await params
    const productId = Number(id)
    console.log(productId)

    // SSR fetch — runs on the server, result is streamed to the client
    let product
    try {
        product = await getProductById(productId)
    } catch {
        notFound()
    }

    if (!product) notFound()

    return (
        <div className="bg-zinc-50/50 dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                {/* ── Breadcrumb ── SSR  */}
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
                        href="/"
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

                {/* ── Main Content Grid ── SSR  */}
                <div className="grid gap-10 lg:grid-cols-2">

                    {/* Image — SSR  */}
                    <div className="group flex items-center justify-center overflow-hidden rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:p-12 dark:border-zinc-800 dark:bg-zinc-900">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={500}
                            height={500}
                            className="max-h-[420px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Product Info — SSR  */}
                    <div className="flex flex-col gap-5">
                        <Badge variant="secondary" className="w-fit rounded-full capitalize text-xs">
                            {product.category}
                        </Badge>

                        <h1 className="text-2xl font-bold leading-snug tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
                            {product.title}
                        </h1>

                        {/* Rating — SSR  */}
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

                        {/* Price — SSR  */}
                        <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                            ${product.price.toFixed(2)}
                        </span>

                        <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800" />

                        {/* Description — SSR  */}
                        <div>
                            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Product Details
                            </h3>
                            <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {product.description}
                            </p>
                        </div>

                        <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800" />

                        {/* ── CSR boundary 🔄 — only Add to Cart + Wishlist need interactivity */}
                        <ProductActions
                            product={product}
                        />

                        {/* Trust signals — SSR  */}
                        <div className="mt-2 grid grid-cols-3 gap-3">
                            {[
                                { label: "Free Shipping", icon: "🚚" },
                                { label: "Secure Payment", icon: "🔒" },
                                { label: "Easy Returns", icon: "↩️" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex flex-col items-center gap-1 rounded-xl border border-zinc-100 bg-zinc-50/50 py-3 text-center dark:border-zinc-800 dark:bg-zinc-900/50"
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Related Products ── SSR with Streaming */}
                <Suspense
                    fallback={
                        <div className="mt-20 border-t border-zinc-100 pt-16 dark:border-zinc-800">
                            <div className="mb-8">
                                <div className="h-8 w-48 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                                <div className="mt-2 h-4 w-64 animate-pulse rounded-lg bg-zinc-100 dark:bg-zinc-900" />
                            </div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <ProductCardSkeletonGrid count={4} />
                            </div>
                        </div>
                    }
                >
                    <RelatedProducts
                        currentProductId={product.id}
                        category={product.category}
                    />
                </Suspense>

                {/* Back link — SSR  */}
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


