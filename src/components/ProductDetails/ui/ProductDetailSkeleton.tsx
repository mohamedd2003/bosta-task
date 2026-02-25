import { Skeleton } from "@/components/ui/skeleton"

export function ProductDetailSkeleton() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            {/* Breadcrumb skeleton */}
            <div className="mb-8 flex items-center gap-2">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-32" />
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
                {/* Image skeleton */}
                <div className="flex items-center justify-center rounded-2xl border border-zinc-100 bg-white p-10 dark:border-zinc-800 dark:bg-zinc-900">
                    <Skeleton className="aspect-square w-full max-w-md rounded-xl" />
                </div>

                {/* Info skeleton */}
                <div className="flex flex-col gap-6">
                    {/* Category */}
                    <Skeleton className="h-6 w-24 rounded-full" />
                    {/* Title */}
                    <div className="space-y-2">
                        <Skeleton className="h-8 w-3/4" />
                        <Skeleton className="h-8 w-1/2" />
                    </div>
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-5 w-28" />
                        <Skeleton className="h-5 w-16" />
                    </div>
                    {/* Price */}
                    <Skeleton className="h-10 w-32" />
                    {/* Divider */}
                    <Skeleton className="h-px w-full" />
                    {/* Description */}
                    <div className="space-y-2">
                        <Skeleton className="h-5 w-28" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-3 pt-4">
                        <Skeleton className="h-12 flex-1 rounded-xl" />
                        <Skeleton className="h-12 w-12 rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}
