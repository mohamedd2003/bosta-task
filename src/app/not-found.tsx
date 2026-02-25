"use client"

import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] mt-10 flex-col items-center justify-center px-4 text-center">
            {/* ── Illustration ── */}
            <div className="relative mb-8">
                <div className="absolute -inset-4 rounded-full bg-red-50 opacity-50 blur-2xl dark:bg-red-950/20" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-xl dark:bg-zinc-900">
                    <Search className="h-12 w-12 text-primary" />
                </div>
            </div>

            {/* ── Content ── */}
            <h1 className="mb-3 text-6xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50">
                404
            </h1>
            <h2 className="mb-6 text-2xl font-bold text-zinc-800 dark:text-zinc-200">
                Page Not Found
            </h2>
            <p className="mb-10 max-w-md text-balance text-zinc-500 dark:text-zinc-400">
                Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* ── Actions ── */}
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                    href="/"
                    className="bg-primary flex h-12 items-center gap-2 rounded-xl px-6 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                    <Home className="h-4 w-4" />
                    Back to Home
                </Link>
              
            </div>

            {/* ── Quick Links ── */}
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-zinc-100 pt-8 text-left sm:grid-cols-4 dark:border-zinc-800">
                <div>
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400">Shop</h4>
                    <ul className="space-y-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        <li><Link href="/products" className="hover:text-primary">All Products</Link></li>
                        <li><Link href="/products?category=electronics" className="hover:text-primary">Electronics</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400">Account</h4>
                    <ul className="space-y-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        <li><Link href="#" className="hover:text-primary">My Profile</Link></li>
                        <li><Link href="#" className="hover:text-primary">Order History</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400">Support</h4>
                    <ul className="space-y-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        <li><Link href="#" className="hover:text-primary">Help Center</Link></li>
                        <li><Link href="#" className="hover:text-primary">Shipping Info</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400">Company</h4>
                    <ul className="space-y-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        <li><Link href="#" className="hover:text-primary">About Us</Link></li>
                        <li><Link href="#" className="hover:text-primary">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
