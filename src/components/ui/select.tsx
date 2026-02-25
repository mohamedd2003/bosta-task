"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, Check } from "lucide-react"

// Since we are not sure about radix-ui package exports for Select, 
// we'll implement a clean, accessible custom select using a standard HTML select 
// for maximum reliability while keeping the premium look.

const Select = React.Fragment
const SelectGroup = React.Fragment
const SelectValue = React.Fragment

const SelectTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<"button">
>(({ className, children, ...props }, ref) => (
    <button
        ref={ref}
        className={cn(
            "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-900/50",
            className
        )}
        {...props}
    >
        {children}
        <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
))
SelectTrigger.displayName = "SelectTrigger"

const SelectContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative z-50 min-w-32 overflow-hidden rounded-md border bg-white text-zinc-950 shadow-md animate-in fade-in-80 select-none dark:bg-zinc-950 dark:text-zinc-50",
            className
        )}
        {...props}
    >
        <div className="p-1">{children}</div>
    </div>
))
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div"> & { value: string }
>(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
            className
        )}
        {...props}
    >
        <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
            {/* Check icon would go here if selected */}
        </span>
        {children}
    </div>
))
SelectItem.displayName = "SelectItem"

// Simplified version for this implementation: 
// We will use a standard Select for the form to ensure it works perfectly with React Hook Form
export function CustomSelect({
    options,
    value,
    onValueChange,
    placeholder
}: {
    options: string[],
    value?: string,
    onValueChange: (v: string) => void,
    placeholder?: string
}) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
                className="flex h-9 w-full appearance-none items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-900/50"
            >
                <option value="" disabled>{placeholder}</option>
                {options.map(opt => (
                    <option key={opt} value={opt}>
                        {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown className="h-4 w-4 opacity-50" />
            </div>
        </div>
    )
}

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
}
