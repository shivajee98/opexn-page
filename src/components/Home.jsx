import React, { useState } from 'react';
import logo from '../assets/file.png';
import mobile from '../assets/asset.png';

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleClick = () => {
        window.open('https://www.linkedin.com/company/opexn/', '_blank');
    };

    return (
        <div
            className="min-h-screen flex flex-col lg:flex-row" // Responsive flex layout
            style={{
                backgroundColor: '#2b1821',
            }}
        >
            {/* Left Section */}
            <div
                className="flex-1 flex flex-col justify-center items-center lg:items-start lg:pl-24" // Center for mobile, align left for desktop
            >
                {/* Image in the top-left corner */}
                <img
                    src={logo}
                    alt="opexn"
                    className="w-32 lg:w-auto mb-6 lg:ml-20 transform scale-100 lg:scale-125" // Responsive scaling
                />

                <div
                    className="text-white font-bold text-4xl sm:text-6xl lg:text-9xl text-center lg:text-left leading-tight mb-4"
                >
                    Coming<br />Soon!
                </div>

                <div
                    className="text-white text-lg sm:text-2xl lg:text-3xl text-center lg:text-left leading-tight mb-8"
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
                        className={`text-white py-3 px-8 rounded-full text-lg lg:text-2xl transition-all duration-300 ${
                            isHovered
                                ? 'bg-[#cb2601] text-black shadow-lg transform scale-105'
                                : 'bg-[#fb2e01]'
                        }`}
                    >
                        L E A R N M O R E
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div
                className="flex-1 flex items-center justify-center lg:justify-end lg:pr-24 mt-10 lg:mt-0"
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
