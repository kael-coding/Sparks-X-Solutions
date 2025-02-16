import React, { useState, useEffect } from 'react';
import product2 from '../assets/image/product-image/product2.jpg';

const Products = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true); // Fade-in effect when the component mounts
    }, []);

    return (
        <>
            <div className="flex flex-col min-h-screen">
                {/* Space for Fixed Navbar */}
                <div className="h-20"></div>

                {/* Main Content */}
                <main className="flex-grow">
                    <section
                        className={`py-16 bg-[#F5E1C0] mt-10 mb-10 flex items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center">
                            <div className="text-center w-full mb-8">
                                <h1 className="text-4xl font-semibold text-gray-800">Ignite X</h1>
                                <p className="text-lg text-gray-600 mt-4">
                                    IgniteX is a groundbreaking, eco-friendly fire starter that redefines convenience and safety for users who
                                    care about their health and the environment. Unlike traditional fire starters that often rely on harmful
                                    chemicals, IgniteX is crafted using all-natural, sustainably sourced, and biodegradable materials. This
                                    innovative approach minimizes environmental impact and ensures the safety of those handling and using
                                    the product, promoting a cleaner and healthier experience for everyone.
                                </p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-3/4 lg:w-1/2">
                                <div className="flex flex-wrap items-center justify-center">
                                    <div className="w-full md:w-1/2 p-6">
                                        <img
                                            src={product2}
                                            alt="Illustration"
                                            className="w-full h-auto rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Products;
