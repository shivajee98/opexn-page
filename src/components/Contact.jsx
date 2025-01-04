import React from 'react';
import bg from '../assets/contactBG.jpg';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div
            className="min-h-screen flex flex-col lg:flex-row" // Responsive layout
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Left Section */}
            <div
                className="flex-1 flex flex-col justify-center items-center lg:items-start lg:pl-24 text-center lg:text-left"
            >
                <h1
                    className="text-4xl sm:text-6xl lg:text-9xl font-bold mb-8"
                    style={{ color: '#fb2e01' }}
                >
                    Contact Us
                </h1>

                <div className="mt-10 w-full max-w-lg">
                    {/* Email Section */}
                    <div className="mb-8">
                        <h2
                            className="text-2xl sm:text-4xl lg:text-6xl font-bold"
                            style={{ color: '#fd288d' }}
                        >
                            EMAIL
                        </h2>
                        <a
                            href="mailto:info.opexn@gmail.com"
                            className="text-white text-base sm:text-lg lg:text-3xl hover:text-gray-400 transition"
                        >
                            info.opexn@gmail.com
                        </a>
                    </div>

                    {/* Social Section */}
                    <div>
                        <h2
                            className="text-2xl sm:text-4xl lg:text-6xl font-bold"
                            style={{ color: '#fd288d' }}
                        >
                            SOCIAL
                        </h2>
                        <a
                            href="https://www.linkedin.com/company/opexn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-base sm:text-lg lg:text-3xl text-blue-600 hover:text-blue-800 transition"
                        >
                            <FaLinkedin className="mr-2 text-4xl sm:text-6xl lg:text-8xl" />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
