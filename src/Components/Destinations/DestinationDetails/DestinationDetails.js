import React from 'react';
import { Link } from 'react-router-dom';

const DestinationDetails = () => {
    return (
        <div>
            {/*TOP BANNER*/}
            <section className="relative text-white bg-center bg-no-repeat bg-cover" role="banner" style={{ backgroundImage: "url(https://www.istanbulturkeytravel.com/wp-content/uploads/2020/04/cappadocia.jpg)" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative px-4 py-24 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-36 lg:flex lg:items-center">

                    <div className="max-w-3xl mx-auto text-center ">

                        <h1
                            className="text-3xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-200 via-green-500 to-green-200"
                        >
                            COUNTRY NAME
                        </h1>

                        <p className="max-w-xl mx-auto mt-6 text-lg">
                            SHORT TITLE WILL BE HERE
                        </p>

                        <div className="mt-8 sm:justify-center sm:flex">
                            <Link
                                to=""
                                className="block px-5 py-3 mt-3 font-medium border border-green-600 rounded-lg sm:ml-3 sm:mt-0 hover:bg-green-500"
                            >
                                SHOW ALL DESINATIONS
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* WHY THIS PLACE */}
            <section className='mb-16 mt-10'>
                <div className='text-center'>
                    <p><i className="fas fa-map-marked-alt text-6xl text-green-400"></i></p>
                    <p className='text-3xl p-2'>WHY COUNTRY NAME</p>
                    <p className='px-10 lg:px-80 md:px-56 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ipsum. Amet explicabo facere eveniet? Quae nostrum iure distinctio nisi deleniti consectetur quam unde repellendus a, corporis placeat corrupti eaque aperiam mollitia consequatur error suscipit, libero cumque iusto soluta neque. Fuga obcaecati neque perspiciatis autem modi ducimus, error vitae voluptates, pariatur libero aliquid natus exercitationem fugit sequi non! Itaque soluta ex possimus eaque consequatur. Dolorum delectus voluptate dolor veritatis, suscipit quisquam et a quia magni? Cumque aperiam doloribus, velit quo earum eligendi. Porro odio explicabo numquam quibusdam ratione voluptatum tempore beatae accusantium nemo doloribus ab odit, exercitationem minima vel architecto esse.</p>
                </div>
            </section>
            {/*ZIGZAG ABOUT */}
            <section className='mb-16'>
                <div>
                    <div className='container mx-auto'>
                        <div className='lg:grid lg:grid-cols-2 grid grid-cols-1'>
                            <div className='flex flex-col justify-center items-center px-20'>
                                <h3 className='text-3xl mb-3 font-bold'>Quality service at Affordable Cost</h3>
                                <p>One of the many challenges in today’s healthcare system is quality service, made available at an affordable cost. In this year we will also be focussing on investing in training and development of human resource. A smart and mature team is the backbone of any organization. We want our team to grow with us. Many members of our team are with us since the inception phase and have contributed all these years in our progress. We are providing value-based education and training to our team and their families. Empowering the team with crucial decision-making rights and pushing them to perform at higher levels, reveal their inner strengths and capabilities.</p>
                                <div className='mt-5'>
                                    <Link
                                        to=""
                                        className="block px-5 py-3 mt-3 font-medium border border-green-600 rounded-lg sm:ml-3 sm:mt-0 hover:bg-green-500"
                                    >
                                        TRAVEL HERE
                                    </Link>
                                </div>
                            </div>
                            <div className="about-img">
                                <img src="https://www.istanbulturkeytravel.com/wp-content/uploads/2020/04/cappadocia.jpg" alt="" height="450" width="100%" />
                            </div>
                        </div>
                        <div className='lg:grid lg:grid-cols-2 grid grid-cols-1'>
                            <div className="about-img">
                                <img src="https://www.istanbulturkeytravel.com/wp-content/uploads/2020/04/cappadocia.jpg" alt="" height="450" width="100%" />
                            </div>
                            <div className='flex flex-col justify-center items-center px-20'>
                                <h3 className='text-3xl mb-3 font-bold'>Top Specialist</h3>
                                <p>Specialist is defined as an expert in some field or a person who concentrates his or her energies on a specific field. A doctor who focuses on care of the heart is an example of a heart specialist. Any of several noncommissioned ranks in the US Army that correspond to that of corporal through sergeant first class</p>
                                <div className='mt-5'>
                                    <Link
                                        to=""
                                        className="block px-5 py-3 mt-3 font-medium border border-green-600 rounded-lg sm:ml-3 sm:mt-0 hover:bg-green-500"
                                    >
                                        TRAVEL HERE
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* STEPS */}
            <section className="text-black">
                <div>
                    <h1 className='text-5xl inline border-b-2 border-green-300'>TRIP PLAN</h1>
                </div>
                <div className="container px-5 py-14 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-green-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                    <i className="fas fa-plane-departure text-white"></i>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">DEPARTURE</h2>
                                    <p className="leading-relaxed">You will leave the boarding on time.Hoping a very safe and sound journey</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-green-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                    <i className="fas fa-hotel text-white"></i>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">HOTEL</h2>
                                    <p className="leading-relaxed">Will stay in a 3star hotel and take rest there for one day and have some personal time.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-green-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                    <i className="fas fa-eye text-white"></i>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">SIGHTSEEING</h2>
                                    <p className="leading-relaxed">Will travel to the most famous and awesome places to see.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-green-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                    <i className="fas fa-ship text-white"></i>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">CRUISE PARTY</h2>
                                    <p className="leading-relaxed">One night stay at the biggest crush ship and enjoy the party.</p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                    <i className="fas fa-user-clock text-white"></i>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">PERSONAL TIME</h2>
                                    <p className="leading-relaxed">We will have enough personal time to roam at our own choice.</p>
                                </div>
                            </div>
                        </div>
                        <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://www.istanbulturkeytravel.com/wp-content/uploads/2020/04/cappadocia.jpg" alt="step" />
                    </div>
                </div>
            </section>
            <section className='mb-16'>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p class="leading-relaxed text-lg">Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowliness, sail away from the safe harbor. Cathch the trade winds in your sails</p>
                            <p className='leading-relaxed text-2xl'>SO START EXPLORING</p>
                            <span class="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
                            <div>
                                <Link
                                    to=""
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

export default DestinationDetails;