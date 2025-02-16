import React from 'react';

const MissionVisionSection = () => (
    <section className="py-16 mt-16 mb-16 flex items-center justify-center">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center bg-[#F9F6F0] rounded-lg shadow-lg p-12">
            <div className="w-full md:w-1/2 p-6">
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">Vision</h2>
                <p className="text-lg mt-6 text-gray-600">
                    A world where fire is kindled with respect for nature, using sustainable materials, and empowering
                    individuals to connect with ancient fire-making practices, symbolizing connection and sustainability.</p>
            </div>
            <div className="w-full md:w-1/2 p-6">
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">Mission</h2>
                <p className="text-lg mt-6 text-gray-600">
                    To provide eco-friendly fire starters made from natural resources, offering a sustainable alternative to
                    traditional options. Our commitment to innovation and responsible sourcing ensures easy-to-use,
                    environmentally friendly products that protect individual health.
                </p>
            </div>
        </div>
    </section>
);

export default MissionVisionSection;
