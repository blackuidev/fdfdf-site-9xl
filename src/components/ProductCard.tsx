import { Link } from 'react-router-dom';
import { Product } from '@/lib/types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900"
        >
            <div className="aspect-h-4 aspect-w-3 sm:aspect-none sm:h-96">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-white">
                    <Link to={`/products/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </Link>
                </h3>
                <p className="text-sm text-neutral-400">{product.brand}</p>
                <div className="flex flex-1 flex-col justify-end">
                    <p className="text-base font-medium text-white">${product.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500">
                    <ArrowRight className="h-5 w-5 text-white" />
                 </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
