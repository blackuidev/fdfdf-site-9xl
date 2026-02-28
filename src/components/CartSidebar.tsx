import { useCartStore } from "@/store/cartStore";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/lightswind/sheet";
import { Button } from "./lightswind/button";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const CartSidebar = () => {
    const { items, isOpen, toggleCart, removeFromCart, updateQuantity } = useCartStore();

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent className="w-[400px] sm:w-[540px] bg-neutral-900 border-l-neutral-800 text-white flex flex-col">
                <SheetHeader className="pr-12">
                    <SheetTitle className="text-white">Shopping Cart</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto pr-4 -mr-6 custom-scrollbar">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-neutral-400">
                            <p>Your cart is empty.</p>
                            <Button variant="link" className="text-sky-400" onClick={toggleCart} asChild>
                                <Link to="/products">Start Shopping</Link>
                            </Button>
                        </div>
                    ) : (
                        <ul className="divide-y divide-neutral-800">
                            {items.map(item => (
                                <li key={`${item.id}-${item.selectedSize}`} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-neutral-800">
                                        <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover object-center" />
                                    </div>
                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium">
                                                <h3><Link to={`/products/${item.id}`}>{item.name}</Link></h3>
                                                <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-neutral-400">{item.brand}</p>
                                            <p className="mt-1 text-sm text-neutral-400">Size: {item.selectedSize}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <div className="flex items-center border border-neutral-700 rounded-md">
                                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.selectedSize, -1)} disabled={item.quantity <= 1}>
                                                    <Minus className="h-4 w-4" />
                                                </Button>
                                                <span className="w-8 text-center">{item.quantity}</span>
                                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.selectedSize, 1)}>
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <div className="flex">
                                                <Button variant="ghost" type="button" className="font-medium text-red-500 hover:text-red-400" onClick={() => removeFromCart(item.id, item.selectedSize)}>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {items.length > 0 && (
                    <SheetFooter className="border-t border-neutral-800 pt-6 mt-auto">
                        <div className="w-full space-y-4">
                            <div className="flex justify-between text-base font-medium">
                                <p>Subtotal</p>
                                <p>${subtotal.toFixed(2)}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-neutral-400">Shipping and taxes calculated at checkout.</p>
                            <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                                Checkout
                            </Button>
                            <div className="mt-6 flex justify-center text-center text-sm text-neutral-400">
                                <p>
                                    or{' '}
                                    <button type="button" className="font-medium text-sky-400 hover:text-sky-500" onClick={toggleCart}>
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartSidebar;
