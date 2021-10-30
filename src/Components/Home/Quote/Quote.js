import React from 'react';
import { Link } from 'react-router-dom';

const Quote = () => {
    return (
        <section className="relative text-white bg-center bg-no-repeat bg-cover" role="banner" style={{ backgroundImage: "url(https://www.istanbulturkeytravel.com/wp-content/uploads/2020/04/cappadocia.jpg)" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-36 lg:flex lg:items-center">

                <div className="max-w-3xl mx-auto text-center ">

                    <h1
                        className="text-3xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-200 via-green-500 to-green-200"
                    >
                        YOU ONLY LIVE ONCE
                    </h1>

                    <p className="max-w-xl mx-auto mt-6 text-lg">
                        Time and tide waits for none. If you fall back you will be fallen for ever
                    </p>

                    <div className="mt-8 sm:justify-center sm:flex">
                        <Link
                            to="/bookingform"
                            className="block px-5 py-3 mt-3 font-medium border border-green-600 rounded-lg sm:ml-3 sm:mt-0 hover:bg-green-500"
                        >
                            DON'T WAIT PLAN TODAY
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Quote;