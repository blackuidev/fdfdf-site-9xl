import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/lightswind/button';
import { useCartStore } from '@/store/cartStore';
import { cn } from '@/lib/utils';
import { toast } from 'react-toastify';
import { Toaster } from '@/components/lightswind/toaster';

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { addToCart, toggleCart } = useCartStore();

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            setError('Please select a size.');
            return;
        }
        setError(null);
        addToCart(product, selectedSize);
        toast.success(`${product.name} (Size: ${selectedSize}) added to cart!`);
        setTimeout(toggleCart, 500);
    };

    return (
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <Toaster />
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <div className="aspect-square rounded-lg overflow-hidden border border-neutral-800">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                        {product.images.map((img, index) => (
                            <div key={index} className="aspect-square rounded-md overflow-hidden border border-neutral-800 cursor-pointer">
                                <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-sm font-medium text-sky-400">{product.brand}</p>
                    <h1 className="text-4xl font-bold tracking-tight mt-2">{product.name}</h1>
                    <p className="text-3xl mt-4">${product.price.toFixed(2)}</p>

                    <div className="mt-8">
                        <h3 className="text-sm font-medium">Description</h3>
                        <p className="mt-2 text-neutral-400">{product.description}</p>
                    </div>

                    <div className="mt-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium">Select Size</h3>
                            <a href="#" className="text-sm font-medium text-sky-400 hover:text-sky-500">Size guide</a>
                        </div>
                        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 mt-4">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => {
                                        setSelectedSize(size);
                                        if (error) setError(null);
                                    }}
                                    className={cn(
                                        "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-neutral-800 focus:outline-none sm:flex-1",
                                        selectedSize === size ? 'bg-white text-black border-white' : 'border-neutral-700 text-neutral-300'
                                    )}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                    </div>

                    <Button onClick={handleAddToCart} className="mt-8 w-full bg-sky-500 hover:bg-sky-600 text-white text-lg py-6">
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
