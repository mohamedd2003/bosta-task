import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ProductCard } from '@/components/ProductCard/types/ProductCard.types'

interface CartItem extends ProductCard {
    quantity: number
}

interface CartState {
    items: CartItem[]
    addItem: (product: ProductCard) => void
    removeItem: (productId: number) => void
    updateQuantity: (productId: number, quantity: number) => void
    clearCart: () => void
    getTotalItems: () => number
    getTotalPrice: () => number
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (product) => {
                const currentItems = get().items
                const existingItem = currentItems.find(item => item.id === product.id)

                if (existingItem) {
                    set({
                        items: currentItems.map(item =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    })
                } else {
                    set({ items: [...currentItems, { ...product, quantity: 1 }] })
                }
            },

            removeItem: (productId) => {
                set({
                    items: get().items.filter(item => item.id !== productId),
                })
            },

            updateQuantity: (productId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(productId)
                    return
                }

                set({
                    items: get().items.map(item =>
                        item.id === productId ? { ...item, quantity } : item
                    ),
                })
            },

            clearCart: () => set({ items: [] }),

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0)
            },

            getTotalPrice: () => {
                return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
            },
        }),
        {
            name: 'bosta-cart-storage',
        }
    )
)
