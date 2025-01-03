import React from 'react';
import bg from '../assets/opexn.png';
import opexnLogo from '../assets/file.png';

const Home = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-red-950 relative"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            {/* Logo positioned in the top-left corner with increased size */}
            <div className="absolute top-1 left-1">
                <img
                    src={opexnLogo}
                    alt="Opexn Logo"
                    className="w-[1500px] h-auto" // Adjust the width value here
                />
                <h1>Coming <br/>Soon!</h1>
            </div>
        </div>
    );
};

export default Home;
