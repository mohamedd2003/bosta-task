import Link from "next/link"
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-white px-4 py-20 dark:bg-zinc-950">
            {/* ── Background Elements ── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[120px] dark:bg-red-500/10" />
                <div className="absolute -right-[10%] -bottom-[10%] h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[120px] dark:bg-red-500/10" />
                <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/[0.02] blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-5xl text-center">
                {/* ── Badge ── */}
                <div className="mb-8 inline-flex animate-bounce-subtle items-center gap-2 rounded-full border border-red-100 bg-red-50/50 px-4 py-1.5 text-[13px] font-bold text-primary backdrop-blur-sm dark:border-red-900/30 dark:bg-red-950/20">
                    <TrendingUp className="h-4 w-4" />
                    <span>New Winter Collection 2026 is Live</span>
                </div>

                {/* ── Main Heading ── */}
                <h1 className="mb-6 text-5xl font-[900] leading-[1.1] tracking-tight text-zinc-900 sm:text-7xl lg:text-8xl dark:text-zinc-50">
                    Elevate Your <br />
                    <span className="bg-gradient-to-r from-primary via-red-500 to-amber-500 bg-clip-text text-transparent">
                        Digital Lifestyle.
                    </span>
                </h1>

                {/* ── Subheading ── */}
                <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-zinc-500 sm:text-xl dark:text-zinc-400">
                    Discover a curated selection of premium electronics and lifestyle essentials.
                    Simplified shopping, lightning-fast delivery, and world-class quality.
                </p>

                {/* ── Call to Actions ── */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="#products"
                        className="group bg-primary hover:bg-primary/95 flex h-14 items-center gap-2 rounded-2xl px-10 text-base font-bold text-white shadow-2xl shadow-red-500/30 transition-all hover:-translate-y-1 active:scale-95"
                    >
                        <span>Start Exploring</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                 </Link>
                </div>

              
            </div>
        </section>
    )
}
