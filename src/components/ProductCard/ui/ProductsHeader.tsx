"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import cookies from "js-cookie"

export function ProductsHeader() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setIsLoggedIn(!!cookies.get("token"))
    }, [])

    return (
        <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <nav className="flex items-center gap-2 text-sm text-zinc-500">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="text-zinc-300">/</span>
                <span className="font-medium text-zinc-900 dark:text-zinc-50">Products</span>
            </nav>

            {isLoggedIn && (
                <Link
                    href="/products/add"
                    className="bg-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition-all hover:-translate-y-0.5"
                >
                    <span>Add Product</span>
                </Link>
            )}
        </div>
    )
}
