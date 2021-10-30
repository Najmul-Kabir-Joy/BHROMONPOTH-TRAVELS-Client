import React from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
    return (
        <div className='mt-16'>
            <div>
                <h1 className='text-5xl border-b-2 border-green-400 inline'>OUR POPULAR PACKAGES</h1>
            </div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-14 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div class="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
                                <span class="bg-green-400 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">SYLHET TOUR</h2>
                                <h1 class="text-5xl text-black leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>$200</span>
                                    <span class="text-lg ml-1 font-normal text-gray-500">/person</span>
                                </h1>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>9 Days 7 Nights
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>30 persons
                                </p>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>10 Places
                                </p>
                                <p class="flex items-center text-gray-600 mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>1 night cruise
                                </p>
                                <Link to='/packagedetails'>
                                    <button class="flex items-center mt-auto text-white bg-green-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded">PACKAGE DETAILS
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </Link>
                                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Packages;