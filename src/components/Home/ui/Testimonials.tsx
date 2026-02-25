"use client"

import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
    id: number
    name: string
    handle: string
    avatar: string
    content: string
    highlightedWords?: string[]
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Amr Soliman",
        handle: "@amr_soliman",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amr",
        content: "Bosta has completely changed how we handle our e-commerce deliveries in Egypt. The speed and reliability are unmatched.",
        highlightedWords: ["reliability"],
    },
    {
        id: 2,
        name: "Sara Ahmed",
        handle: "@sara_designs",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
        content: "The tracking system is incredibly accurate. I love how I can see exactly where my package is at any moment.",
        highlightedWords: ["accurate"],
    },
    {
        id: 3,
        name: "Mohamed Ali",
        handle: "@mali_tech",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohamed",
        content: "Professional couriers and great customer support. Highly recommended for any business looking for a solid logistics partner.",
        highlightedWords: ["Professional"],
    },
    {
        id: 4,
        name: "Nour El-Din",
        handle: "@nour_e",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nour",
        content: "The cash-on-delivery process is seamless. Bosta makes it so easy for both the seller and the customer.",
        highlightedWords: ["seamless"],
    },
    {
        id: 5,
        name: "Laila Hassan",
        handle: "@laila_h",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laila",
        content: "Very impressed with their next-day delivery service. It has helped us grow our customer trust significantly.",
        highlightedWords: ["next-day"],
    },
    {
        id: 6,
        name: "Yasmine Fawzy",
        handle: "@yasmine_f",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yasmine",
        content: "Their dashboard is so intuitive. Managing hundreds of orders daily has never been this efficient.",
        highlightedWords: ["efficient"],
    },
    {
        id: 7,
        name: "Karim Ziad",
        handle: "@karim_z",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karim",
        content: "Bosta's API integration was a breeze. We were up and running in no time. Perfect for tech-first companies.",
        highlightedWords: ["integration"],
    },
    {
        id: 8,
        name: "Hoda Mahmoud",
        handle: "@hoda_m",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hoda",
        content: "Exceptional service! They handled a large-scale delivery project for us flawlessly. Truly a top-tier delivery partner.",
        highlightedWords: ["Exceptional"],
    },
]

export function Testimonials() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current
            const scrollAmount = clientWidth * 0.8
            scrollContainerRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth",
            })
        }
    }

    return (
        <section className="relative overflow-hidden bg-zinc-50/30 py-24 dark:bg-zinc-950">
            {/* Background decorative elements */}
            <div className="absolute right-0 bottom-0 h-full w-1/3 bg-linear-to-l from-primary/5 via-transparent to-transparent opacity-50 transition-opacity duration-1000" />
            <div className="absolute left-0 bottom-0 h-full w-1/3 bg-linear-to-r from-accent/5 via-transparent to-transparent opacity-50 transition-opacity duration-1000" />

            <div className="container relative mx-auto px-4 lg:max-w-7xl">
                <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
                    <div className="text-center md:text-left">
                        <span className="inline-block rounded-md border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary shadow-xs dark:border-primary/30 dark:bg-primary/10">
                            Testimonials
                        </span>
                        <h2 className="mt-6 text-[40px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50 lg:text-[48px]">
                            Our trusted clients
                        </h2>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-xs transition-all hover:border-primary hover:text-primary dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-primary dark:hover:text-primary"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-xs transition-all hover:border-primary hover:text-primary dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-primary dark:hover:text-primary"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-8 snap-x snap-mandatory"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="w-[340px] shrink-0 snap-center first:ml-0 md:w-[400px]"
                        >
                            <div className="flex h-full flex-col rounded-3xl bg-white p-10 ring-1 ring-zinc-200/50 transition-all hover:shadow-xl hover:shadow-zinc-200/30 dark:bg-zinc-900/50 dark:ring-zinc-800 dark:hover:shadow-none">
                                {/* Quote Icon */}
                                <div className="mb-8">
                                    <svg
                                        width="32"
                                        height="24"
                                        viewBox="0 0 32 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-primary/20 dark:text-primary/10"
                                    >
                                        <path
                                            d="M0 24V14.1176C0 9.47059 1.13725 5.86275 3.41176 3.29412C5.7451 0.666667 9.07843 -0.568627 13.4118 -0.411765V5.52941C10.8627 5.52941 9.03922 6.13725 7.94118 7.35294C6.84314 8.56863 6.29412 10.5686 6.29412 13.3529H13.4118V24H0ZM18.5882 24V14.1176C18.5882 9.47059 19.7255 5.86275 22 3.29412C24.3333 0.666667 27.6667 -0.568627 32 -0.411765V5.52941C29.451 5.52941 27.6275 6.13725 26.5294 7.35294C25.4314 8.56863 24.8824 10.5686 24.8824 13.3529H32V24H18.5882Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>

                                <p className="mb-10 grow text-[17px] leading-[1.6] text-zinc-600 dark:text-zinc-400">
                                    {renderContent(testimonial.content, testimonial.highlightedWords)}
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-zinc-50 dark:ring-zinc-800">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="truncate font-bold text-zinc-900 dark:text-zinc-50">
                                            {testimonial.name}
                                        </h4>
                                        <p className="truncate text-[13px] text-zinc-400 dark:text-zinc-500">
                                            {testimonial.handle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <style jsx h-full>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>
        </section>
    )
}

function renderContent(content: string, highlightedWords?: string[]) {
    if (!highlightedWords || highlightedWords.length === 0) return content

    const parts = content.split(new RegExp(`(${highlightedWords.join("|")})`, "gi"))

    return parts.map((part, i) =>
        highlightedWords.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
            <span key={i} className="font-bold text-primary">
                {part}
            </span>
        ) : (
            part
        )
    )
}
