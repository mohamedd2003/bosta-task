export function CartSkeleton() {
    return (
        <div className="min-h-[60vh] bg-zinc-50/50 dark:bg-zinc-950">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="animate-pulse space-y-6">
                    <div className="h-10 w-48 rounded-xl bg-zinc-200 dark:bg-zinc-800" />
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-36 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
                            ))}
                        </div>
                        <div className="h-72 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
                    </div>
                </div>
            </div>
        </div>
    )
}
