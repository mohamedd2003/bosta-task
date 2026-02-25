import Link from "next/link"

export function HeroSection() {
    return (
        <section className="relative overflow-hidden border-b border-zinc-200/60 bg-white dark:border-zinc-800/60 dark:bg-zinc-950">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-red-50 via-transparent to-transparent opacity-60 dark:from-red-950/20" />
            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
                <div className="max-w-2xl">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-medium text-primary dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        New arrivals every week
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
                        Discover Premium{" "}
                        <span className="bg-linear-to-r from-primary to-red-400 bg-clip-text text-transparent dark:from-red-400 dark:to-red-300">
                            Products
                        </span>
                    </h1>
                    <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                        Explore our handpicked collection of top-quality products. From
                        electronics to fashion — find exactly what you need.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="#products"
                            className="bg-primary hover:bg-primary/90 inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-medium text-white shadow-sm transition-all hover:shadow-md"
                        >
                            Browse All Products
                        </Link>
                        <Link
                            href="#products"
                            className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                        >
                            View Featured ↓
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
