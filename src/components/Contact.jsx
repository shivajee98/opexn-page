import React from 'react';
import bg from '../assets/contactBG.jpg';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon from react-icons

const Home = () => {
    return (
        <div
            className="min-h-screen flex"
            style={{
                backgroundImage: `url(${bg})`, // Correct background image syntax
                backgroundSize: 'cover', // Optional: Ensure the image covers the entire container
                backgroundPosition: 'center', // Optional: Ensure the image is centered
            }}
        >
            {/* Left Section */}
            <div
                className="flex-1 flex flex-col items-start justify-center"
                style={{
                    padding: '50px',
                    textAlign: 'left',  // Align text to the left
                }}
            >
                {/* Table Heading */}
                <h1 className="text-9xl font-bold"
                    style={{ color: '#fb2e01' }}
                >
                    Contact Us
                </h1>

                {/* Contact Info Table */}
                <div className="mt-10 w-full max-w-lg">
                    <table className="w-full 1">
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 text-6xl font-bold" style={{color: '#fd288d'}}>EMAIL</td>
                                <td className="py-2 px-4">
                                    <a href="mailto:info.opexn@gmail.com" className="text-white text-5xl hover:text-gray-600">info.opexn@gmail.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-8 px-4 text-6xl font-bold" style={{color: '#fd288d'}}>SOCIAL</td>
                                <td className="py-2 px-4">
                                    {/* LinkedIn Icon with hover effect */}
                                    <a
                                        href="https://www.linkedin.com/company/opexn/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 text-5xl hover:text-blue-800 transition-colors"
                                    >
                                        <FaLinkedin className="mr-2 text-8xl" />
                                    </a>
                                    <br />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;
