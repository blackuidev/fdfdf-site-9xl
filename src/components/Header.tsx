import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Search } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { Button } from "./lightswind/button";

const Header = () => {
    const { toggleCart, items } = useCartStore();
    const cartItemCount = items.length;

    const navLinkClasses = "relative text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";
    const activeNavLinkClasses = "relative text-sm font-medium text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-white after:scale-x-100";

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-lg">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tighter">SOLEmate</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? activeNavLinkClasses : navLinkClasses}>Home</NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? activeNavLinkClasses : navLinkClasses}>All Products</NavLink>
                    <NavLink to="/new-arrivals" className={({ isActive }) => isActive ? activeNavLinkClasses : navLinkClasses}>New Arrivals</NavLink>
                    <NavLink to="/sale" className={({ isActive }) => isActive ? activeNavLinkClasses : navLinkClasses}>Sale</NavLink>
                </nav>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="relative h-9 w-9" onClick={toggleCart}>
                        <ShoppingBag className="h-5 w-5" />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
                                {cartItemCount}
                            </span>
                        )}
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
