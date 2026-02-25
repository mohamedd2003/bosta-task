import { Skeleton } from "@/components/ui/skeleton"
import {
    Card,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"

export function ProductCardSkeleton() {
    return (
        <Card className="flex h-full flex-col overflow-hidden border-zinc-100 pt-0 dark:border-zinc-800">
            {/* Image skeleton */}
            <div className="flex aspect-4/3 items-center justify-center bg-zinc-50 p-6 dark:bg-zinc-900">
                <Skeleton className="h-44 w-32 rounded-lg" />
            </div>

            <CardHeader className="flex-1 gap-3">
                {/* Category badge */}
                <div className="flex justify-end">
                    <Skeleton className="h-5 w-16 rounded-full" />
                </div>
                {/* Title lines */}
                <div className="space-y-1.5">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
                {/* Rating */}
                <div className="flex items-center gap-1.5">
                    <Skeleton className="h-3.5 w-20" />
                    <Skeleton className="h-3.5 w-8" />
                </div>
                {/* Price */}
                <Skeleton className="h-6 w-20" />
            </CardHeader>

            <CardFooter className="pt-0">
                <Skeleton className="h-9 w-full rounded-lg" />
            </CardFooter>
        </Card>
    )
}

interface ProductCardSkeletonGridProps {
    count?: number
}

export function ProductCardSkeletonGrid({ count = 10 }: ProductCardSkeletonGridProps) {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <ProductCardSkeleton key={i} />
            ))}
        </>
    )
}
