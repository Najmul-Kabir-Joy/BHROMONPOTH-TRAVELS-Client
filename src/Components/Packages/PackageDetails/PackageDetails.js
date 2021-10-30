import React from 'react';
import { Link } from 'react-router-dom';

const PackageDetails = () => {
    return (
        <div>
            <div className='mt-10'>
                <h1 className='text-3xl inline border-b-2 border-green-400'>DETAILS FOR PACKAGE NAME</h1>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full" src="https://wallpapercave.com/wp/wp4069431.jpg" />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-wrap -m-4">
                            <div className="xl:w-1/2 md:w-1/2 p-4 shadow-xl mb-5 border border-green-200">
                                <div className=" p-6 rounded-lg">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                        <i className="fas fa-dollar-sign text-xl"></i>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">$200/person</h2>
                                    <p className="leading-relaxed text-base">For each person the total amount is 200$ only</p>
                                </div>
                            </div>
                            <div className="xl:w-1/2 md:w-1/2 p-4 shadow-xl mb-5 border border-green-200">
                                <div className=" p-6 rounded-lg">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                        <i className="fas fa-calendar-day text-xl"></i>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">9 Days 7 Nights</h2>
                                    <p className="leading-relaxed text-base">We will spend total 9 days and 7 nights including departure day.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/2 md:w-1/2 p-4 shadow-xl mb-5 border border-green-200">
                                <div className="p-6 rounded-lg">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                        <i className="fas fa-users text-xl"></i>
                                    </div>
                                    <h2 className="text-lg text-green-900 font-medium title-font mb-2">30 persons</h2>
                                    <p className="leading-relaxed text-base">Our maximum group member limit is only 30 persons.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/2 md:w-1/2 p-4 shadow-xl mb-5 border border-green-200">
                                <div className="p-6 rounded-lg">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                        <i className="far fa-flag text-xl"></i>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">10 Places</h2>
                                    <p className="leading-relaxed text-base">We will visit 10 awesome tourist attraction places.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/2 md:w-1/2 p-4 shadow-xl mb-5 border border-green-200">
                                <div className=" p-6 rounded-lg">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                        <i className="fas fa-ship text-xl"></i>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">1 night cruise</h2>
                                    <p className="leading-relaxed text-base">We will enjoy one night cruise party in a big cruise ship.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/2 md:w-1/2 p-4 shadow-xl mb-5 border border-green-200">
                                <div className="p-6 rounded-lg">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                                        <i className="fas fa-tshirt text-xl"></i>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">1 T-shirt</h2>
                                    <p className="leading-relaxed text-base">Each participant will get a "BhromonPoth" branded tshirt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mb-20'>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 pt-24 mx-auto">
                        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p class="leading-relaxed text-lg">Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowliness, sail away from the safe harbor. Cathch the trade winds in your sails</p>
                            <p className='leading-relaxed text-2xl'>SO START EXPLORING</p>
                            <span class="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
                            <div>
                                <Link
                                    to="bookingform"
                                    className=" px-5 py-3 mt-3 font-medium border border-green-600 rounded-lg sm:ml-3 sm:mt-0 hover:bg-green-500"
                                >
                                    BOOK YOUR SEAT NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default PackageDetails;