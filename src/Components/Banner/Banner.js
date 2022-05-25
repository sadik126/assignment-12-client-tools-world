import React from 'react';
import background from '../image/banner.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ background: `url(${background})` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-lg">
                    <h1 class="mb-5 text-4xl font-bold text-white uppercase">Welcome to tools world</h1>
                    <p class="mb-5 text-white">Computer diagnostic tools are meant to output a message that indicates a buy or any error with the system, program or device. It is interesting to know that error reporting in Windows is an in-built PC diagnostic tool and runs on its own anytime there occurs any problem with an application. </p>
                    <button className="btn  uppercase text-black font-bold bg-gradient-to-r from-red-700 to-yellow-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;