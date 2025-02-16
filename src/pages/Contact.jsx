import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaTiktok, FaEnvelope, FaInstagram, FaFacebookF } from 'react-icons/fa';

const ContactSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Check visibility of the section when scrolling
    useEffect(() => {
        const handleScroll = () => {
            const rect = sectionRef.current.getBoundingClientRect();
            // Trigger animation when the section comes into view (threshold: 75% visible)
            if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
                setIsVisible(true); // Start animation
            } else {
                setIsVisible(false); // Reset animation if section is out of view
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check in case the section is already in view
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`py-16 mt-28 bg-[#F9F6F0] h-full px-4 sm:px-8 md:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800">Contact Us</h2>
                <p className="text-lg sm:text-xl mt-6 text-gray-600">
                    Have any questions? Feel free to reach out to us, and we’ll be happy to assist you.
                </p>
            </div>

            <div className="max-w-3xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6">You can also contact us via the following methods:</p>

                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <FaPhoneAlt className="w-6 h-6 text-orange-500" />
                        <p className="text-gray-700">Mobile Number: <strong>09853104959</strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaTiktok className="w-6 h-6 text-orange-500" />
                        <p className="text-gray-700">TikTok: <strong><a href="https://www.tiktok.com/@sparkxsolutions" className="text-orange-600" target="_blank" rel="noopener noreferrer">@sparkxsolutions</a></strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaEnvelope className="w-6 h-6 text-orange-500" />
                        <p className="text-gray-700">Email: <strong><a href="mailto:sparkxsolutions42@gmail.com" className="text-orange-600">sparkxsolutions42@gmail.com</a></strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaInstagram className="w-6 h-6 text-orange-500" />
                        <p className="text-gray-700">Instagram: <strong><a href="https://www.instagram.com/sparkxsolutioncompany" className="text-orange-600" target="_blank" rel="noopener noreferrer">@sparkxsolutioncompany</a></strong></p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaFacebookF className="w-6 h-6 text-orange-500" />
                        <p className="text-gray-700">Facebook: <strong>Spark X Solutions</strong></p>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg">
                <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <label className="block text-gray-800 font-semibold">Your Name</label>
                            <input type="text" id="name" name="name" className="w-full p-3 mt-2 border border-gray-300 rounded-md" placeholder="Enter your name" />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-gray-800 font-semibold">Your Email</label>
                            <input type="email" id="email" name="email" className="w-full p-3 mt-2 border border-gray-300 rounded-md" placeholder="Enter your email" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="block text-gray-800 font-semibold">Your Message</label>
                        <textarea id="message" name="message" className="w-full p-3 mt-2 border border-gray-300 rounded-md" rows="6" placeholder="Enter your message"></textarea>
                    </div>

                    <button type="submit" className="bg-orange-500 text-white px-8 py-3 mt-6 rounded-full hover:bg-orange-600 transition duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
