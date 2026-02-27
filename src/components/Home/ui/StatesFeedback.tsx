
interface ErrorStateProps {
    title?: string
    message?: string
}

export function ErrorState({
    title = "Failed to load products",
    message = "Something went wrong. Please refresh the page and try again.",
}: ErrorStateProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-red-100 bg-red-50/50 py-20 text-center dark:border-red-900/30 dark:bg-red-950/20">
            <div className="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-full">
                <svg className="text-primary h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
            </div>
            <div>
                <p className="text-primary text-lg font-semibold">{title}</p>
                <p className="mt-1 text-sm text-red-600/80 dark:text-red-500/70">
                    {message}
                </p>
            </div>
        </div>
    )
}

interface EmptyStateProps {
    title?: string
    message?: string
}

export function EmptyState({
    title = "No products found",
    message = "Try selecting a different category.",
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-zinc-200 bg-white py-20 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                <svg className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </div>
            <div>
                <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
                    {title}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{message}</p>
            </div>
        </div>
    )
}
