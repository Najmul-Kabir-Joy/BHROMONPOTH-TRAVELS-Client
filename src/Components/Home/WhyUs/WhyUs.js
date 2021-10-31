import React from 'react';

const WhyUs = () => {
    return (
        <div data-aos="fade-up">
            <div className='mt-5'>
                <h1 className='text-5xl border-b-2 border-green-300 inline'>WHY BHROMONPOTH</h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-16 '>
                    <div className='mt-20 group rounded-xl shadow-2xl my-2 border-2 border-green-500 hover:bg-green-300 hover:text-white hover:transition duration-500 ease-in-out'>
                        <div className="max-w-xs ">
                            <div className='text-5xl -mt-12'><i className="fab fa-battle-net border-2 rounded-full p-5 shadow-xl bg-green-300 text-white group-hover:text-green-300 group-hover:bg-white"></i></div>
                            <div className="px-6 py-4 mt-0 ">
                                <div className="font-bold text-xl mb-2">VACATION PACKAGES</div>
                                <p className="text-grey-darker text-base">
                                    Book cheap vacation packages for romantic travel, family vacations or a weekend getaway.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-20 group rounded-xl shadow-2xl my-2 border-2 border-green-500 hover:bg-green-300 hover:text-white hover:transition duration-500 ease-in-out'>
                        <div className="max-w-xs ">
                            <div className='text-5xl -mt-12'><i className="fas fa-plane border-2 rounded-full p-5 shadow-xl bg-green-300 text-white group-hover:text-green-300 group-hover:bg-white"></i></div>
                            <div className="px-6 py-4 mt-0 ">
                                <div className="font-bold text-xl mb-2">CHEAP FLIGHTS</div>
                                <p className="text-grey-darker text-base">
                                    Find your wings with our choice of the best sites to book flights
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-20 group rounded-xl shadow-2xl my-2 border-2 border-green-500 hover:bg-green-300 hover:text-white hover:transition duration-500 ease-in-out'>
                        <div className="max-w-xs ">
                            <div className='text-5xl -mt-12'><i className="fas fa-clock border-2 rounded-full p-5 shadow-xl bg-green-300 text-white group-hover:text-green-300 group-hover:bg-white"></i></div>
                            <div className="px-6 py-4 mt-0 ">
                                <div className="font-bold text-xl mb-2">LAST MINUTE TRAVEL</div>
                                <p className="text-grey-darker text-base">
                                    Be better late than never and find yourself a trip at the eleventh hour
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-20 group rounded-xl shadow-2xl my-2 border-2 border-green-500 hover:bg-green-300 hover:text-white hover:transition duration-500 ease-in-out'>
                        <div className="max-w-xs ">
                            <div className='text-5xl -mt-12'><i className="fas fa-ship border-2 rounded-full p-5 shadow-xl bg-green-300 text-white group-hover:text-green-300 group-hover:bg-white"></i></div>
                            <div className="px-6 py-4 mt-0 ">
                                <div className="font-bold text-xl mb-2">CRUISE PARTY</div>
                                <p className="text-grey-darker text-base">
                                    Take the plunge and find your ideal holiday on the seas


                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default WhyUs;