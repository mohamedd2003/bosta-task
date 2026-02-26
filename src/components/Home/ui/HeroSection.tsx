import Link from "next/link"
import { ArrowRight, ShoppingBag, Star, Zap, TrendingUp, ShieldCheck, ShoppingCart } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] overflow-hidden bg-zinc-50 pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pb-24 dark:bg-zinc-950">
            {/* ── Abstract Background Mesh ── */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75 dark:from-primary dark:to-orange-500 dark:opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

                    {/* ── Left Content ── */}
                    <div className="max-w-2xl text-center lg:text-left">
                        <div className="mb-6 inline-flex animate-bounce-subtle items-center gap-2 rounded-full border border-zinc-200/60 bg-white/50 px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/50 dark:text-zinc-200">
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            New Winter Collection 2026
                        </div>

                        <h1 className="text-5xl font-black leading-[1.1] tracking-tighter text-zinc-900 sm:text-6xl md:text-7xl lg:text-7xl dark:text-zinc-50">
                            Redefine Your <br className="hidden md:block" />
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-linear-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
                                    Everyday Style.
                                </span>
                                <span className="absolute -inset-1 -z-10 block -skew-y-3 bg-red-100/50 dark:bg-red-900/20 rounded-xl"></span>
                            </span>
                        </h1>

                        <p className="mt-6 text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400">
                            Step into the future of retail. Curated electronics, trending fashion, and premium lifestyle essentials crafted for the modern individual.
                        </p>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                            <Link
                                href="#products"
                                className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-500/25 transition-all hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Exploring
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 -z-10 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
                            </Link>

                            <div className="flex items-center gap-4 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className={`h-10 w-10 rounded-full border-2 border-white dark:border-zinc-950 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-500 overflow-hidden relative z-[${5 - i}]`}>
                                            {/* Generic avatars using a robust placeholder service */}
                                            <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i + 15}`} alt="User avatar" className="h-full w-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center text-amber-500">
                                        <Star fill="currentColor" className="h-4 w-4" />
                                        <Star fill="currentColor" className="h-4 w-4" />
                                        <Star fill="currentColor" className="h-4 w-4" />
                                        <Star fill="currentColor" className="h-4 w-4" />
                                        <Star fill="currentColor" className="h-4 w-4" />
                                    </div>
                                    <span>2k+ Happy Customers</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-zinc-200 pt-8 sm:grid-cols-3 dark:border-zinc-800">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                                    <Zap className="h-5 w-5 text-amber-500" />
                                    <span className="font-bold">Fast Delivery</span>
                                </div>
                                <span className="text-sm text-zinc-500">Free over $50</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                                    <span className="font-bold">Secure</span>
                                </div>
                                <span className="text-sm text-zinc-500">100% Protected</span>
                            </div>
                            <div className="hidden sm:flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                                    <TrendingUp className="h-5 w-5 text-blue-500" />
                                    <span className="font-bold">Top Quality</span>
                                </div>
                                <span className="text-sm text-zinc-500">Premium Brands</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Visuals (Glassmorphism Bento) ── */}
                    <div className="relative mx-auto mt-12 w-full max-w-lg lg:mt-0 lg:max-w-none">
                        <div className="relative right-0 top-0 h-[450px] w-full sm:h-[500px] lg:h-[600px]">
                            {/* Main floating card */}
                            <div className="absolute left-1/2 top-1/2 h-[380px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-zinc-200/50 bg-white/40 shadow-2xl backdrop-blur-3xl sm:h-[400px] sm:w-[320px] lg:h-[480px] lg:w-[350px] dark:border-white/10 dark:bg-zinc-900/50">
                                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse" />
                                    <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
                                </div>
                                <div className="relative flex h-full flex-col p-6">
                                    <div className="flex items-center justify-between">
                                        <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-bold text-zinc-800 shadow-sm backdrop-blur-md dark:bg-black/40 dark:text-zinc-200">Featured</span>
                                        <ShoppingBag className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                                    </div>
                                    <div className="mt-8 flex-1">
                                        <div className="relative h-48 w-full group">
                                            {/* Stylish Abstract Centerpiece */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="relative flex h-32 w-32 sm:h-40 sm:w-40 items-center justify-center rounded-full bg-linear-to-br from-primary via-orange-400 to-amber-300 shadow-2xl shadow-primary/30 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                                                    <div className="absolute inset-0 rounded-full bg-white/20 mix-blend-overlay backdrop-blur-sm" />
                                                    <div className="absolute inset-2 rounded-full border border-white/40" />
                                                    <ShoppingCart className="relative z-10 h-16 w-16 text-white drop-shadow-md transition-transform duration-700 group-hover:-rotate-12" strokeWidth={1.5} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-auto rounded-2xl bg-white/60 p-4 shadow-sm backdrop-blur-md dark:bg-black/40">
                                        <p className="min-h-5 text-sm font-bold text-zinc-900 line-clamp-1 dark:text-zinc-100">
                                            Signature Essentials
                                        </p>
                                        <div className="mt-1 flex items-center justify-between">
                                            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                                                Explore Now
                                            </p>
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white">
                                                <ArrowRight className="h-4 w-4 -rotate-45" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating decorative element: Top Rated */}
                            <div className="absolute -left-4 top-10 flex animate-bounce-subtle items-center gap-3 rounded-2xl border border-zinc-200/50 bg-white/70 p-3 shadow-xl backdrop-blur-xl sm:-left-10 sm:top-20 sm:p-4 dark:border-white/10 dark:bg-zinc-900/70" style={{ animationDuration: '4s' }}>
                                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                                    <Star className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">Top Rated</p>
                                    <p className="text-[10px] sm:text-xs text-zinc-500">4.9/5 Average</p>
                                </div>
                            </div>

                            {/* Floating decorative element: Trending */}
                            <div className="absolute -right-2 bottom-20 flex animate-bounce-subtle items-center gap-3 rounded-2xl border border-zinc-200/50 bg-white/70 p-3 shadow-xl backdrop-blur-xl sm:-right-5 sm:bottom-32 sm:p-4 dark:border-white/10 dark:bg-zinc-900/70" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                                    <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">Trending</p>
                                    <p className="text-[10px] sm:text-xs text-zinc-500">#1 This Week</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* ── Abstract Background Mesh (Bottom) ── */}
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div
                    className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75 dark:from-primary dark:to-orange-500 dark:opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </section>
    )
}
