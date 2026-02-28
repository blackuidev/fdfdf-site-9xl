import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '@/lib/types';

interface CartState {
    items: CartItem[];
    isOpen: boolean;
    addToCart: (product: Product, size: number) => void;
    removeFromCart: (productId: number, size: number) => void;
    updateQuantity: (productId: number, size: number, change: number) => void;
    toggleCart: () => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,
            addToCart: (product, size) => {
                const { items } = get();
                const existingItem = items.find(
                    (item) => item.id === product.id && item.selectedSize === size
                );

                if (existingItem) {
                    set({
                        items: items.map((item) =>
                            item.id === product.id && item.selectedSize === size
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                } else {
                    set({
                        items: [...items, { ...product, quantity: 1, selectedSize: size }],
                    });
                }
            },
            removeFromCart: (productId, size) => {
                set({
                    items: get().items.filter(
                        (item) => !(item.id === productId && item.selectedSize === size)
                    ),
                });
            },
            updateQuantity: (productId, size, change) => {
                set({
                    items: get().items.map((item) =>
                        item.id === productId && item.selectedSize === size
                            ? { ...item, quantity: Math.max(1, item.quantity + change) }
                            : item
                    ),
                });
            },
            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
            clearCart: () => set({ items: [] }),
        }),
        {
            name: 'cart-storage', // name of the item in the storage (must be unique)
        }
    )
);
