import { Product } from '@/lib/types';

export const products: Product[] = [
    {
        id: 1,
        name: 'Cosmic Glide Pro',
        brand: 'AetherRun',
        price: 180.00,
        description: 'Experience weightless runs with the Cosmic Glide Pro. Featuring advanced cushioning and a breathable mesh upper for ultimate comfort and performance.',
        tags: ['running', 'performance', 'men'],
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d34?q=80&w=1887&auto=format&fit=crop'
        ],
        sizes: [8, 9, 9.5, 10, 10.5, 11, 12],
    },
    {
        id: 2,
        name: 'Terra Flex Trainer',
        brand: 'Apex Athletics',
        price: 120.00,
        description: 'From city streets to mountain trails, the Terra Flex Trainer is your versatile companion. Durable, stylish, and built for any adventure.',
        tags: ['lifestyle', 'trainer', 'unisex'],
        images: [
            'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1887&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1928&auto=format&fit=crop'
        ],
        sizes: [7, 8, 8.5, 9, 9.5, 10, 11],
    },
    {
        id: 3,
        name: 'Velocity Racer',
        brand: 'Momentum',
        price: 250.00,
        description: 'Engineered for speed. The Velocity Racer combines a carbon-fiber plate with responsive foam to propel you forward, faster.',
        tags: ['running', 'racing', 'unisex'],
        images: [
            'https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=1887&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1608231387042-89d0ac72c839?q=80&w=1887&auto=format&fit=crop'
        ],
        sizes: [8, 9, 10, 11, 12, 13],
    },
    {
        id: 4,
        name: 'Urban Roamer',
        brand: 'Strider Co.',
        price: 95.00,
        description: 'Classic style meets modern comfort. The Urban Roamer is the perfect everyday sneaker, crafted from premium materials for a timeless look.',
        tags: ['casual', 'lifestyle', 'men'],
        images: [
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1780&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop'
        ],
        sizes: [7, 8, 9, 9.5, 10, 10.5, 11, 12, 13],
    },
    {
        id: 5,
        name: 'Azure High-Top',
        brand: 'Celeste Kicks',
        price: 135.00,
        description: 'Make a statement with the Azure High-Top. A bold design with superior ankle support and a comfortable fit for all-day wear.',
        tags: ['hightop', 'lifestyle', 'women'],
        images: [
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop'
        ],
        sizes: [6, 7, 7.5, 8, 8.5, 9, 10],
    },
    {
        id: 6,
        name: 'Eco-Knit Slip-On',
        brand: 'GreenSole',
        price: 85.00,
        description: 'Sustainable style. The Eco-Knit Slip-On is made from recycled materials, offering a comfortable, breathable, and eco-conscious choice.',
        tags: ['casual', 'sustainable', 'unisex'],
        images: [
            'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1617606002779-51d866bdd1d1?q=80&w=2070&auto=format&fit=crop'
        ],
        sizes: [6, 7, 8, 9, 10, 11],
    },
];
