"use client"

import { useEffect, useState, useRef } from "react"

interface StatItem {
    label: string
    value: string
    suffix?: string
    target: number
}

const stats: StatItem[] = [
    { label: "PREMIUM BRANDS", value: "0", target: 50, suffix: "+" },
    { label: "HAPPY CUSTOMERS", value: "0", target: 10, suffix: "K+" },
    { label: "ORDER FULFILLED", value: "0", target: 25, suffix: "K+" },
    { label: "QUALITY SUPPORT", value: "24/7", target: 0 },
]

export function StatsSection() {
    return (
        <section className="bg-white py-24 dark:bg-zinc-950">
            <div className="container mx-auto px-4 lg:max-w-7xl">
                <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-16">
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function StatCard({ stat }: { stat: StatItem }) {
    const [count, setCount] = useState(0)
    const countRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!isVisible || stat.target === 0) return

        let startValue = 0
        const duration = 2000
        const intervalTime = 16
        const totalSteps = duration / intervalTime
        const increment = stat.target / totalSteps

        const timer = setInterval(() => {
            startValue += increment
            if (startValue >= stat.target) {
                setCount(stat.target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(startValue))
            }
        }, intervalTime)

        return () => clearInterval(timer)
    }, [isVisible, stat.target])

    return (
        <div ref={countRef} className="text-center">
            <div className="text-[32px] font-black leading-tight tracking-tight text-[#111827] dark:text-zinc-50 lg:text-4xl">
                {stat.target > 0 ? (
                    <span>
                        {count}
                        {stat.suffix}
                    </span>
                ) : (
                    stat.value
                )}
            </div>
            <p className="mt-3 text-[11px] font-bold tracking-[0.05em] text-[#9ca3af] uppercase">
                {stat.label}
            </p>
        </div>
    )
}
