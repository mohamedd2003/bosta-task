"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCartStore } from "@/store/useCartStore"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
]

import { CartDrawer } from "./CartDrawer"

export default function Navbar() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { getTotalItems } = useCartStore()

    // Hydration fix for persisted stores
    useEffect(() => {
        setMounted(true)
    }, [])

    const cartCount = mounted ? getTotalItems() : 0

    return (
        <nav className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-950/80">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* ── Logo ── */}
                <Link
                    href="/"
                    className="flex items-center gap-1 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
                >
                    <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
                        <rect width="32" height="32" rx="8" className="fill-primary" />
                        <path
                            d="M10 9h5.5a4 4 0 010 8H10V9z"
                            fill="white"
                            fillOpacity="0.9"
                        />
                        <path
                            d="M10 17h6.5a4 4 0 010 8H10v-8z"
                            fill="white"
                        />
                    </svg>
                    <span>
                        <span className="text-primary">OSTA</span>
                    </span>
                </Link>

                {/* ── Desktop Links ── */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${isActive
                                    ? "text-primary"
                                    : "text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </div>

                {/* ── Right side ── */}
                <div className="hidden items-center gap-3 md:flex">
                    <button
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                        aria-label="Search"
                    >
                        <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                    {/* Cart Tooltip/Button */}
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative flex h-9 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                        aria-label="Cart"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-5.98.572m5.98-.572h9m-9 0a3 3 0 01-5.98.572M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM15.75 14.25l2.394-8.978M15.75 14.25H7.5m8.25 0a3 3 0 105.98.572m-5.98-.572a3 3 0 005.98.572" />
                        </svg>
                        My Cart
                        <span className="bg-primary flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold text-white transition-all scale-100 group-active:scale-110">
                            {cartCount}
                        </span>
                    </button>
                    <Link
                        href="#"
                        className="bg-primary hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-full px-5 text-sm font-medium text-white shadow-sm transition-all"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* ── Mobile Hamburger ── */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* ── Mobile Menu ── */}
            {mobileOpen && (
                <div className="border-t border-zinc-200/60 bg-white px-4 pb-4 pt-2 md:hidden dark:border-zinc-800/60 dark:bg-zinc-950">
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${isActive
                                        ? "text-primary bg-red-50 dark:bg-red-950/20"
                                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-50"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </nav>
    )
}
