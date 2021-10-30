import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <section className="relative text-white bg-center bg-no-repeat bg-cover" role="banner" style={{ backgroundImage: "url(https://wallpapercave.com/wp/wp4069431.jpg)" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-36 lg:h-screen lg:flex lg:items-center">

                <div className="max-w-3xl mx-auto text-center">

                    <h1
                        className="text-3xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-200 via-green-500 to-green-200"
                    >
                        BhromonPoth
                    </h1>

                    <p className="max-w-xl mx-auto mt-6 text-lg">
                        Visit all the exciting tourists spots, vaccation corner, travel destination with your best travelling buddy "BhromonPoth".
                        So don't wait and click the button below to start your best moments.
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

export default Banner;