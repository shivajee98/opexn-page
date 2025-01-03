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
            className="min-h-screen flex"
            style={{
                backgroundColor: '#2b1821',
            }}
        >
            {/* Left Section */}
            <div
                className="flex-1 flex flex-col mb-24 justify-center"
                style={{
                    backgroundColor: '#2b1821',
                    paddingLeft: '100px',
                    position: 'relative', // Make the container relative so we can position elements inside it
                }}
            >
                {/* Image in the top left corner */}
                <div className='mt-1'>
                <img
                    src={logo}
                    alt="opexn"
                    style={{
                        marginLeft: '75px',
                        transform: 'scale(1.3)',
                        width: 'auto',  // Keeps the original size
                        height: 'auto', // Keeps the original size
                    }}
                    />
                </div>

                <div
                    className="text-white font-bold text-9xl leading-tight mb-4 mt-10"
                    style={{
                        lineHeight: '1.1',
                    }}
                >
                    Coming<br />Soon!
                </div>
                <div
                    className="text-white text-3xl"
                    style={{
                        lineHeight: '1.1',
                    }}
                >
                    <br />
                    Your One Stop Solution to Events, Expo,<br />Workshops and more. Reach out to us<br />to know more!
                </div>
                <div className="mt-12">
                    <button
                        onClick={handleClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{
                            backgroundColor: isHovered ? '#cb2601' : '#fb2e01',
                            color: 'white',
                            padding: '1rem 5rem',
                            borderRadius: '9999px',
                            fontSize: '1.875rem',
                            textDecoration: 'underline',
                            transition: 'all 0.3s ease',
                            boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        }}
                    >
                        L E A R N M O R E
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: '#2b1821' }}>
  <img 
    src={mobile} 
    alt="" 
    style={{
      transform: 'scale(1.3)',   // This will scale the image 3 times larger
      transformOrigin: 'center', // Ensure the image scales from the center
      width: 'auto', 
      height: 'auto',
    }} 
  />
</div>

        </div>
    );
};

export default Home;
