import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const ProductsPage = () => {
    return (
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="pb-8 border-b border-neutral-800">
                <h1 className="text-4xl font-bold tracking-tight">All Products</h1>
                <p className="mt-4 max-w-xl text-lg text-neutral-400">
                    Discover our full collection of premium footwear. Hand-selected for quality, comfort, and style.
                </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
