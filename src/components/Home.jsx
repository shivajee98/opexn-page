import React, { useState } from 'react';
import logo from '../assets/file2.svg';
import mobile from '../assets/asset.png';

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        window.open('https://www.linkedin.com/company/opexn/', '_blank');
    };

    return (
        <div
            className="min-h-screen flex flex-col lg:flex-row"
            style={{
                backgroundColor: '#2b1821',
            }}
        >
            {/* Left Section */}
            <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:pl-24">
                {/* Responsive Logo */}
                <img
                    src={logo}
                    alt="opexn"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        marginBottom: '1rem',
                        transition: 'transform 0.3s ease-in-out',
                        transform: 'scale(1)', // Default scale
                        ...(window.innerWidth >= 1024 && { transform: 'scale(1.8)', marginBottom: '100px', marginLeft: '140px' }), // Scale for desktop
                        ...(window.innerWidth < 768 && { transform: 'scale(0.7)' }), // Scale for mobile
                    }}
                />

                <div
                    className="text-white font-bold text-4xl sm:text-6xl lg:text-9xl text-center lg:text-left leading-tight mb-4"
                >
                    Coming<br />Soon!
                </div>

                <div
                    className="text-white text-lg sm:text-2xl ml-2 mr-2 lg:text-3xl text-center lg:text-left leading-tight mb-8"
                >
                    Your One Stop Solution to Events, Expo,<br />
                    Workshops, and more. Reach out to us<br />
                    to know more!
                </div>

                <div className="mt-8 lg:mt-12">
                    <button
                        onClick={handleClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`text-white py-3 px-8 rounded-full hover:text-black text-lg lg:text-2xl transition-all duration-300 ${
                            isHovered
                                ? 'bg-[#fc5834] text-black shadow-lg transform scale-105'
                                : 'bg-[#fb2e01]'
                        }`}
                    >
                        L E A R N M O R E
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div
                className="flex-1 flex items-center justify-center lg:justify-end lg:pr-24 mt-10 lg:mt-20"
            >
                <img
                    src={mobile}
                    alt="mobile preview"
                    className="w-2/3 lg:w-auto transform scale-100 lg:scale-125"
                />
            </div>
        </div>
    );
};

export default Home;
