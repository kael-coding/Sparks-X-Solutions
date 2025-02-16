import React from 'react';

const Navbar = () => (
    <nav className="fixed top-0 w-full bg-[#F0E0C6] z-50 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a href="/">
                <img src="src/assets/image/logo.png" alt="Ignite X Logo" className="w-12 h-auto" />
            </a>
            <div className="md:ml-auto flex space-x-6 md:space-x-12 font-semibold text-gray-700">
                <a href="/" className="hover:text-orange-600 hover:scale-105 transition duration-1000 ease-in-out">Home</a>
                <a href="/about" className="hover:text-orange-600 hover:scale-105 transition duration-1000 ease-in-out">About</a>
                <a href="/products" className="hover:text-orange-600 hover:scale-105 transition duration-1000 ease-in-out">Product</a>
                <a href="/contact" className="hover:text-orange-600 hover:scale-105 transition duration-1000 ease-in-out">Contact</a>
            </div>
        </div>
    </nav>
);

export default Navbar;
