import React from 'react';
import { Link } from 'react-router-dom';

const Destinations = () => {
    return (
        <section className='mt-16'>
            <div className='text-center text-5xl mb-10'>
                <h1 className='inline border-b-2 border-green-300'>POPULAR DESTINATIONS</h1>
            </div>
            <Link to='/destinationdetails'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 sm:gap-10 mx-10'>
                    <div>
                        <div class="bg-white rounded-lg shadow-lg w-full transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80)" }}>
                            <div class="bg-black bg-opacity-20 h-150 px-10 flex flex-wrap flex-col p-24 hover:bg-opacity-75 transform duration-300">
                                <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                                </p>
                            </div>
                            <div className='bg-green-300 text-white'>
                                <h2 class="font-bold mb-2 text-2xl">
                                    GERMANY
                                </h2>
                            </div>
                        </div>
                    </div>

                </div>
            </Link>
        </section>
    );
};

export default Destinations;