import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';

const App = () => {
    const noScrollbarStyle = {
        overflowY: 'scroll', 
        scrollbarWidth: 'none',
        msOverflowStyle: 'none', 
    };

    return (
        <div
            style={{
                ...noScrollbarStyle,
                height: '100vh', // Full viewport height
            }}
        >
            <style>
                {`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>
            <Home />
            <Contact />
        </div>
    );
};

export default App;
