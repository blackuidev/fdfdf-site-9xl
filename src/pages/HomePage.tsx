import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/lightswind/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AuroraBackground } from "@/components/lightswind/aurora-background";
import { motion } from "framer-motion";

const HomePage = () => {
    const featuredProducts = products.slice(0, 4);

    return (
        <div>
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                        Step Into Your Style.
                    </div>
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                        Discover the perfect pair.
                    </div>
                    <Button asChild className="bg-black dark:bg-white rounded-full text-white dark:text-black px-4 py-2">
                        <Link to="/products">
                            Shop New Arrivals <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </AuroraBackground>

            <section className="py-24 sm:py-32">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-baseline sm:justify-between">
                        <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
                        <Link to="/products" className="hidden text-sm font-semibold text-sky-500 hover:text-sky-400 sm:block">
                            Browse all products
                            <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-6 sm:hidden">
                        <Link to="/products" className="block text-sm font-semibold text-sky-500 hover:text-sky-400">
                            Browse all products
                            <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
