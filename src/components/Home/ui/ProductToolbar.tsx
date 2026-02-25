"use client"
import { SortOption } from "@/components/ProductCard/hooks/useProductCard"

interface ProductToolbarProps {
    categories: string[]
    selectedCategory: string
    onCategoryChange: (category: string) => void
    sortBy: SortOption
    onSortChange: (sort: SortOption) => void
}

export function ProductToolbar({
    categories,
    selectedCategory,
    onCategoryChange,
    sortBy,
    onSortChange,
}: ProductToolbarProps) {
    return (
        <div className="mb-8 flex flex-col gap-4 rounded-xl border border-zinc-200/80 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:bg-zinc-900">
            {/* Category chips */}
            <div className="flex flex-wrap items-center gap-2">
                <button
                    onClick={() => onCategoryChange("all")}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${selectedCategory === "all"
                            ? "bg-primary text-white shadow-sm"
                            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                        }`}
                >
                    All
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => onCategoryChange(cat)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-medium capitalize transition-all ${selectedCategory === cat
                                ? "bg-primary text-white shadow-sm"
                                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Sort dropdown */}
            <div className="flex items-center gap-2">
                <label
                    htmlFor="sort-select"
                    className="text-xs font-medium text-zinc-500 dark:text-zinc-400"
                >
                    Price:
                </label>
                <select
                    id="sort-select"
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value as SortOption)}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                    <option value="default">Default</option>
                    <option value="price-asc">Low → High</option>
                    <option value="price-desc">High → Low</option>
                </select>
            </div>
        </div>
    )
}
