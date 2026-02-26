import type { Metadata } from "next"
import Cart from "@/components/Cart/ui/Cart"

export const metadata: Metadata = {
    title: "Shopping Cart — BOSTA",
    description: "Review your cart items, update quantities, and proceed to checkout.",
}

export default function CartPage() {
    return <Cart />
}
