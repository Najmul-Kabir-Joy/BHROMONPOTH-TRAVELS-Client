import React from 'react';
import Slider from 'react-slick';

const Review = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='mb-32'>
            <div className='text-center mt-16 mb-10'>
                <h1 className='text-5xl inline border-b-2 border-green-400'>FEEDBACK</h1>
            </div>
            <div className='container mx-auto'>
                <Slider {...settings}>
                    <div>
                        <div className='group mr-5'>
                            <div class="max-w-md px-8 py-4 border-4 border-green-200 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 group-hover:bg-green-300" >
                                <div class="flex justify-center -mt-16 md:justify-end">
                                    <img class="object-cover w-20 h-20 border-2 border-green-500 rounded-full dark:border-indigo-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                                </div>

                                <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl group-hover:text-white">Design Tools</h2>

                                <p class="mt-2 mb-3 text-gray-600 dark:text-gray-200 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='group mr-5'>
                            <div class="max-w-md px-8 py-4 border-4 border-green-200 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 group-hover:bg-green-300" >
                                <div class="flex justify-center -mt-16 md:justify-end">
                                    <img class="object-cover w-20 h-20 border-2 border-green-500 rounded-full dark:border-indigo-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                                </div>

                                <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl group-hover:text-white">Design Tools</h2>

                                <p class="mt-2 mb-3 text-gray-600 dark:text-gray-200 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='group mr-5'>
                            <div class="max-w-md px-8 py-4 border-4 border-green-200 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 group-hover:bg-green-300" >
                                <div class="flex justify-center -mt-16 md:justify-end">
                                    <img class="object-cover w-20 h-20 border-2 border-green-500 rounded-full dark:border-indigo-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                                </div>

                                <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl group-hover:text-white">Design Tools</h2>

                                <p class="mt-2 mb-3 text-gray-600 dark:text-gray-200 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='group mr-5'>
                            <div class="max-w-md px-8 py-4 border-4 border-green-200 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 group-hover:bg-green-300" >
                                <div class="flex justify-center -mt-16 md:justify-end">
                                    <img class="object-cover w-20 h-20 border-2 border-green-500 rounded-full dark:border-indigo-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                                </div>

                                <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl group-hover:text-white">Design Tools4</h2>

                                <p class="mt-2 mb-3 text-gray-600 dark:text-gray-200 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='group mr-5'>
                            <div class="max-w-md px-8 py-4 border-4 border-green-200 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 group-hover:bg-green-300" >
                                <div class="flex justify-center -mt-16 md:justify-end">
                                    <img class="object-cover w-20 h-20 border-2 border-green-500 rounded-full dark:border-indigo-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                                </div>

                                <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl group-hover:text-white">Design Tools4</h2>

                                <p class="mt-2 mb-3 text-gray-600 dark:text-gray-200 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='group mr-5'>
                            <div class="max-w-md px-8 py-4 border-4 border-green-200 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 group-hover:bg-green-300" >
                                <div class="flex justify-center -mt-16 md:justify-end">
                                    <img class="object-cover w-20 h-20 border-2 border-green-500 rounded-full dark:border-indigo-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                                </div>

                                <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl group-hover:text-white">Design Tools4</h2>

                                <p class="mt-2 mb-3 text-gray-600 dark:text-gray-200 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Review;