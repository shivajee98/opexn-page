import React from 'react';
import bg from '../assets/contactBG.jpg';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div
            className="min-h-screen flex flex-col lg:flex-row"
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
                {/* Heading */}
                <h1
                    className="text-4xl sm:text-6xl lg:text-9xl font-bold mb-8"
                    style={{ color: '#fb2e01' }}
                >
                    Contact Us
                </h1>

                {/* Table */}
                <div className="mt-10 w-full max-w-lg">
                    <table className="w-full">
                        <tbody>
                            {/* Email Row */}
                            <tr>
                                <td
                                    className="py-2 px-4 text-2xl sm:text-4xl lg:text-6xl font-bold"
                                    style={{ color: '#fd288d' }}
                                >
                                    EMAIL
                                </td>
                                <td className="py-2 px-4">
                                    <a
                                        href="mailto:info.opexn@gmail.com"
                                        className="text-white text-lg sm:text-2xl lg:text-3xl hover:text-gray-400 transition"
                                    >
                                        info.opexn@gmail.com
                                    </a>
                                </td>
                            </tr>

                            {/* Social Row */}
                            <tr>
                                <td
                                    className="py-8 px-4 text-2xl sm:text-4xl lg:text-6xl font-bold"
                                    style={{ color: '#fd288d' }}
                                >
                                    SOCIAL
                                </td>
                                <td className="py-2 px-4">
                                    <a
                                        href="https://www.linkedin.com/company/opexn/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-lg sm:text-2xl lg:text-3xl text-blue-600 hover:text-blue-800 transition"
                                    >
                                        <FaLinkedin className="mr-2 text-4xl sm:text-6xl lg:text-8xl" />                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Contact;
