import React from 'react';

const Home = () => {
    return (
        <div
            className="min-h-screen flex"
            style={{
                backgroundColor: '#2b1821', // Background for the whole container
            }}
        >
            {/* Left Section */}
            <div
                className="flex-1 flex flex-col items-start justify-center"
                style={{
                    backgroundColor: '#4b2e4a', // Different background color for the left section
                    padding: '50px',
                    textAlign: 'left',  // Align text to the left
                }}
            >
                <h1 className="text-9xl font-bold"
                    style={{ color: '#fb2e01' }}
                >
                    Contact Us
                </h1>

                {/* Contact Info Table */}
                <div className="mt-10 w-full max-w-lg">
                    <div className="flex justify-start">
                        {/* Left side: Labels */}
                        <div className="flex-1 text-white text-xl">
                            <div className="mb-4">
                                <strong>EMAIL</strong>
                            </div>
                            <div>
                                <strong>SOCIAL</strong>
                            </div>
                        </div>

                        {/* Right side: Values */}
                        <div className="flex-1 text-white text-xl">
                            <div className="mb-4">
                                <a href="mailto:contact@opexn.com" className="underline">contact@opexn.com</a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/company/opexn/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
                                <br />
                                <a href="https://www.twitter.com/opexn" target="_blank" rel="noopener noreferrer" className="underline">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div
                className="flex-1 flex items-center justify-center"
                style={{
                    backgroundColor: '#5a3a5c', // Different background color for the right section
                }}
            >
                <h1 className="text-white text-2xl">Right Section</h1>
            </div>
        </div>
    );
};

export default Home;
