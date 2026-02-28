import { Link } from "react-router-dom";
import { Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-neutral-800 bg-neutral-950">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-bold tracking-tighter">SOLEmate</span>
                        </Link>
                        <p className="text-sm text-neutral-400">The ultimate destination for premium footwear.</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Shop</h3>
                        <ul className="space-y-2">
                            <li><Link to="/products" className="text-sm text-neutral-400 hover:text-white">All Products</Link></li>
                            <li><Link to="/new-arrivals" className="text-sm text-neutral-400 hover:text-white">New Arrivals</Link></li>
                            <li><Link to="/sale" className="text-sm text-neutral-400 hover:text-white">Sale</Link></li>
                            <li><Link to="/brands" className="text-sm text-neutral-400 hover:text-white">Brands</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><Link to="/contact" className="text-sm text-neutral-400 hover:text-white">Contact Us</Link></li>
                            <li><Link to="/faq" className="text-sm text-neutral-400 hover:text-white">FAQ</Link></li>
                            <li><Link to="/shipping" className="text-sm text-neutral-400 hover:text-white">Shipping & Returns</Link></li>
                            <li><Link to="/privacy" className="text-sm text-neutral-400 hover:text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-neutral-400 hover:text-white"><Twitter size={20} /></a>
                            <a href="#" className="text-neutral-400 hover:text-white"><Instagram size={20} /></a>
                            <a href="#" className="text-neutral-400 hover:text-white"><Github size={20} /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
                    <p>&copy; {new Date().getFullYear()} SOLEmate. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
