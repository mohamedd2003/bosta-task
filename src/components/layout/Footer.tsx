"use client"

import { useState } from "react"
import Link from "next/link"

const footerColumns = [
    {
        title: "Customer Service",
        links: [
            { label: "Track your order", href: "#" },
            { label: "FAQ", href: "#" },
            { label: "Orders", href: "#" },
            { label: "Deliveries", href: "#" },
            { label: "Payments", href: "#" },
            { label: "Returns & refunds", href: "#" },
            { label: "Contact us", href: "#" },
        ],
    },
    {
        title: "Product Guide",
        links: [
            { label: "Size guide", href: "#" },
            { label: "Style guide", href: "#" },
            { label: "New arrivals", href: "#" },
            { label: "Categories", href: "#" },
            { label: "Care", href: "#" },
        ],
    },
    {
        title: "About Us",
        links: [
            { label: "Company", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Press", href: "#" },
            { label: "Partners", href: "#" },
        ],
    },
    {
        title: "Legal Area",
        links: [
            { label: "Privacy policy", href: "#" },
            { label: "Conditions of use", href: "#" },
            { label: "Conditions of sale", href: "#" },
            { label: "Cookie settings", href: "#" },
        ],
    },
]

const socialLinks = [
    {
        label: "Facebook",
        href: "#",
        icon: (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
        ),
    },
    {
        label: "Twitter / X",
        href: "#",
        icon: (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
]

export default function Footer() {
    const [email, setEmail] = useState("")
    const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (email.trim()) {
            setSubscribed(true)
            setEmail("")
            setTimeout(() => setSubscribed(false), 3000)
        }
    }

    return (
        <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ── Main Footer Grid ── */}
                <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-[1fr_2fr]">

                    {/* ── Left: Logo + Social + Newsletter ── */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <Link href="/" className="inline-flex items-center gap-2.5">
                                <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
                                    <rect width="32" height="32" rx="8" className="fill-primary" />
                                    <path d="M10 9h5.5a4 4 0 010 8H10V9z" fill="white" fillOpacity="0.9" />
                                    <path d="M10 17h6.5a4 4 0 010 8H10v-8z" fill="white" />
                                </svg>
                                <span className="text-xl font-bold tracking-tight text-primary">bosta</span>
                            </Link>

                            <div className="mt-4 flex items-center gap-3">
                                {socialLinks.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:text-primary dark:text-zinc-500 dark:hover:text-primary"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">
                                Newsletter
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                                Subscribe to the newsletter and receive information about promotions and new arrivals.
                            </p>
                            <form onSubmit={handleSubscribe} className="mt-4">
                                <div className="flex items-center border-b border-zinc-300 pb-1 focus-within:border-primary dark:border-zinc-600 dark:focus-within:border-primary">
                                    <svg className="mr-2 h-4 w-4 shrink-0 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="email@example.com"
                                        className="flex-1 bg-transparent text-sm text-zinc-700 placeholder-zinc-400 outline-none dark:text-zinc-300"
                                    />
                                    <button
                                        type="submit"
                                        className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                                        aria-label="Subscribe"
                                    >
                                        {subscribed ? (
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        ) : (
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {subscribed && (
                                    <p className="mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                        ✓ You&apos;re subscribed!
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* ── Right: 4-column link grid ── */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                        {footerColumns.map((col) => (
                            <div key={col.title}>
                                <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
                                    {col.title}
                                </h4>
                                <ul className="flex flex-col gap-2.5">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-zinc-500 transition-colors hover:text-primary dark:text-zinc-400 dark:hover:text-primary"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Bottom Bar ── */}
                <div className="border-t border-zinc-100 py-6 dark:border-zinc-800">
                    <p className="text-center text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                        BOSTA INC. — PREMIUM E-COMMERCE PLATFORM © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    )
}
