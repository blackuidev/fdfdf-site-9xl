import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedBlobBackground } from '@/components/lightswind/animated-blob-background';
import { ThreeDImageCarousel } from '@/components/lightswind/3d-image-carousel';
import { ThreeDMarquee } from '@/components/lightswind/3d-marquee';
import { Button } from '@/components/lightswind/button'; // Assuming you have a Button component

// Placeholder image URLs for shoes
const shoeImages = [
    { id: 1, src: "https://images.pexels.com/photos/10321162/pexels-photo-10321162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", href: "/product/1" },
    { id: 2, src: "https://images.pexels.com/photos/10321165/pexels-photo-10321165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", href: "/product/2" },
    { id: 3, src: "https://images.pexels.com/photos/10321166/pexels-photo-10321166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", href: "/product/3" },
    { id: 4, src: "https://images.pexels.com/photos/10321167/pexels-photo-10321167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", href: "/product/4" },
    { id: 5, src: "https://images.pexels.com/photos/10321168/pexels-photo-10321168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", href: "/product/5" },
];

// Placeholder images for brand partners/details marquee
const marqueeImages = [
    { src: "https://images.pexels.com/photos/10321162/pexels-photo-10321162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Shoe 1" },
    { src: "https://images.pexels.com/photos/10321165/pexels-photo-10321165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Shoe 2" },
    { src: "https://images.pexels.com/photos/10321166/pexels-photo-10321166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Shoe 3" },
    { src: "https://images.pexels.com/photos/10321167/pexels-photo-10321167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Shoe 4" },
    { src: "https://images.pexels.com/photos/10321168/pexels-photo-10321168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Shoe 5" },
    { src: "https://images.pexels.com/photos/10321162/pexels-photo-10321162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Shoe 6" },
    { src: "https://images.pexels.com/photos/10321165/pexels-photo-10321165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Shoe 7" },
];

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-950 text-black dark:text-white font-primarylw">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden text-center p-4">
                <AnimatedBlobBackground
                    className="absolute inset-0 z-0"
                    firstBlobColors={["#FF6B6B", "#FFE66D", "#4ECDC4"]} // Warm, vibrant colors
                    secondBlobColors={["#1A535C", "#4ECDC4", "#FF6B6B"]} // Cool, complementary colors
                    blurAmount="10vw"
                    firstBlobSpeed={10000}
                    secondBlobSpeed={8000}
                    firstBlobOpacity={0.6}
                    secondBlobOpacity={0.4}
                    interactive={true}
                    interactiveIntensity={7}
                />
                <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
                    >
                        Step into the Future with <br className="hidden sm:inline" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400">
                            Lightswind Shoes
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        Experience unparalleled comfort, cutting-edge design, and sustainable innovation with every stride.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link to="/collection">
                            <Button
                                size="lg"
                                className="px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300
                                bg-gradient-to-r from-blue-600 to-purple-700 text-white
                                hover:from-blue-700 hover:to-purple-800"
                            >
                                Explore Collection <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Product Showcase Section */}
            <section className="py-20 bg-gray-100 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
                    >
                        Our Latest Innovations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 mb-12"
                    >
                        Discover shoes engineered for performance, style, and the planet.
                    </motion.p>
                    <div className="min-h-[500px] flex items-center justify-center">
                        <ThreeDImageCarousel slides={shoeImages} autoplay delay={3} itemCount={3} />
                    </div>
                </div>
            </section>

            {/* Brand Story / Features Section */}
            <section className="py-20 bg-white dark:bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
                    >
                        Crafted for Excellence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 mb-12"
                    >
                        Lightswind is more than just shoes; it's a commitment to quality and a better future.
                    </motion.p>
                    <ThreeDMarquee images={marqueeImages} cols={3} className="max-w-6xl mx-auto" />
                </div>
            </section>

            {/* Call to Action Footer */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold mb-4"
                    >
                        Ready to Experience Lightswind?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg mb-8"
                    >
                        Join the movement towards smarter, more stylish footwear.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link to="/shop">
                            <Button
                                variant="outline"
                                size="lg"
                                className="px-10 py-4 rounded-full text-xl font-bold border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 transition-all duration-300"
                            >
                                Shop Now
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
