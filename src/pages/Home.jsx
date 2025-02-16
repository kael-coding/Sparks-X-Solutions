import React, { useEffect, useState } from 'react';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 500); // Delay before showing content
    }, []);

    return (
        <header className="relative h-screen flex items-center justify-center bg-[#C6A57B] text-white">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
            <div className="z-10 text-center px-6 md:px-12">
                <h1
                    className={`text-4xl sm:text-5xl md:text-6xl font-bold transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}
                >
                    Welcome to Spark X Solutions
                </h1>
                <p
                    className={`text-lg sm:text-xl md:text-2xl mt-4 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}
                >
                    Eco-friendly, sustainable fire starters designed for a safer tomorrow and a greener planet
                </p>

                <a href="/about"><button
                    className={`bg-orange-500 text-white px-6 py-2 mt-6 rounded-full hover:bg-orange-600 transition duration-300 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}
                >
                    Get Started
                </button></a>
            </div>
        </header>
    );
};

export default Home;
