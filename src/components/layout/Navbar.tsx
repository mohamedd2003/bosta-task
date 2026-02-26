"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCartStore } from "@/store/useCartStore"
import { ShoppingBag, Search, Menu, X, User, LogOut } from "lucide-react"
import cookies from "js-cookie"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
]

export default function Navbar() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [userName, setUserName] = useState<string | null>(null)
    const items = useCartStore((state) => state.items)

    useEffect(() => {
        setMounted(true)
        const checkAuth = () => {
            const token = cookies.get("token")
            if (token) {
                setUserName(cookies.get("userName") || "User")
            } else {
                setUserName(null)
            }
        }
        checkAuth()

        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [pathname])

    const handleLogout = () => {
        cookies.remove("token")
        cookies.remove("userName")
        setUserName(null)
        window.location.reload()
    }

    const cartCount = mounted ? items.reduce((total, item) => total + item.quantity, 0) : 0

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 py-2 backdrop-blur-xl shadow-sm dark:bg-zinc-950/80"
                : "bg-white py-4 dark:bg-zinc-950"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* ── Logo ── */}
                <Link
                    href="/"
                    className="group flex items-center gap-2 text-2xl font-black tracking-tighter transition-transform hover:scale-105 active:scale-95"
                >

                    <span className="text-primary dark:text-zinc-50">
                        Bosta
                    </span>
                </Link>

                {/* ── Desktop Links ── */}
                <div className="hidden items-center gap-2 md:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-semibold transition-all hover:text-primary ${isActive
                                    ? "text-primary"
                                    : "text-zinc-500 dark:text-zinc-400"
                                    }`}
                            >
                                {link.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-primary" />
                                )}
                            </Link>
                        )
                    })}
                </div>

                {/* ── Actions ── */}
                <div className="flex items-center gap-2 sm:gap-4">


                    <Link
                        href="/cart"
                        className="group relative flex h-10 items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 text-sm font-bold text-zinc-700 shadow-xs transition-all hover:border-primary hover:text-primary dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                    >
                        <div className="relative">
                            <ShoppingBag className="h-4.5 w-4.5 transition-transform group-hover:-rotate-12" />
                            {cartCount > 0 && (
                                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-black text-white ring-2 ring-white dark:ring-zinc-950">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                        <span className="hidden sm:inline">Cart</span>
                    </Link>

                    {mounted && (
                        userName ? (
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 rounded-full border border-zinc-100 bg-zinc-50/50 py-1 pl-1 pr-3 dark:border-zinc-800 dark:bg-zinc-900">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                                        {userName.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 max-w-[100px] truncate">
                                        {userName}
                                    </span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-100 hover:text-red-500 transition-all dark:hover:bg-zinc-900"
                                    title="Logout"
                                >
                                    <LogOut className="h-5 w-5" />
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-primary hover:bg-primary/95 flex h-10 items-center gap-2 rounded-full px-5 text-sm font-bold text-white shadow-lg shadow-red-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <User className="h-4 w-4" />
                                <span>Login</span>
                            </Link>
                        )
                    )}

                    {/* ── Mobile Hamburger ── */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-zinc-600 transition-all hover:bg-zinc-100 md:hidden dark:bg-zinc-900 dark:text-zinc-400"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* ── Mobile Menu ── */}
            <div
                className={`overflow-hidden transition-all duration-300 md:hidden ${mobileOpen ? "max-h-64 border-t border-zinc-100 dark:border-zinc-800" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col gap-1 p-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`flex items-center rounded-xl px-4 py-3 text-sm font-bold transition-all ${isActive
                                    ? "bg-primary/5 text-primary"
                                    : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-900"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}
