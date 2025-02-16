import React, { useState, useEffect, useRef } from 'react';
import MissionVisionSection from './MissionVisionSection';

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const sectionRef = useRef(null);
    const aboutSectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const rect = sectionRef.current.getBoundingClientRect();
            const aboutRect = aboutSectionRef.current.getBoundingClientRect();

            // Trigger animation when the MissionVisionSection comes into view 
            if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }


            if (aboutRect.top <= window.innerHeight * 0.75 && aboutRect.bottom >= 0) {
                setIsAboutVisible(true);
            } else {
                setIsAboutVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();  // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section
                ref={aboutSectionRef}
                className={`py-16 mt-28 flex items-center justify-center min-h-screen transition-all duration-1000 ease-in-out ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center bg-[#F9F6F0] rounded-lg shadow-lg p-12">
                    <div className="w-full md:w-1/2 p-6">
                        <img
                            src="/src/assets/image/product-image/product1.jpg"
                            alt="Illustration"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-6">
                        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">About IgniteX</h2>
                        <p className="text-lg mt-6 text-gray-600">
                            IgniteX represents a groundbreaking step toward sustainable living by addressing traditional fire
                            starters' environmental and health hazards. By utilizing pili tree resin and other natural,
                            biodegradable materials, IgniteX offers a reliable, eco-friendly, and safe solution for households,
                            outdoor enthusiasts, and environmentally conscious consumers.
                            Our product stands out with its commitment to sustainability, innovative design, and alignment
                            with modern consumer values. IgniteX meets the growing demand for eco-conscious alternatives
                            and empowers individuals to connect with nature responsibly while prioritizing convenience and
                            safety.
                            We invite you to join us in revolutionizing the fire starter market. Whether through investment,
                            partnership, or collaboration, your support can help propel IgniteX into a leader in sustainable firestarting solutions. Together, we can create a future where eco-friendly practices become the
                            standard. Let's schedule a meeting to discuss how we can achieve this vision together.
                        </p>
                        <button className="bg-orange-500 text-white px-8 py-3 mt-6 rounded-full hover:bg-orange-600 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* MissionVisionSection will animate every time it's in view */}
            <section
                ref={sectionRef}
                className={`transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <MissionVisionSection />
            </section>
        </>
    );
};

export default AboutSection;
