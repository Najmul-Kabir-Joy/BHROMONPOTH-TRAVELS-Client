import React from 'react';
import { Link } from 'react-router-dom';
import './PackageCard.css';
const PackageCard = (props) => {
    const { item } = props;
    const { _id, countryname, money, days, persons, places, imgsrc, popular } = item;
    return (

        <div class="p-4 pt-10 xl:w-1/4 md:w-1/2 w-full shadow-sm testingEffect">
            <div class="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden group hover:bg-green-400 hover:text-white hover:transition duration-500 ease-in-out">
                {
                    popular.toLowerCase() === 'yes' ?
                        <span class="bg-green-400 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl group-hover:bg-white group-hover:text-green-400">POPULAR</span>
                        :
                        <span></span>
                }
                <h2 class="text-xl uppercase tracking-widest title-font mb-1 font-medium">{countryname}</h2>
                <h1 class="text-5xl text-black leading-none flex items-center pb-4 mb-4 border-b border-gray-200 group-hover:text-white">
                    <span>{money}</span>
                    <span class="text-lg ml-1 font-normal text-gray-500 group-hover:text-white">/person</span>
                </h1>
                <p class="flex items-center text-black mb-2 group-hover:text-white">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                    </span>{days}
                </p>
                <p class="flex items-center text-black mb-2 group-hover:text-white">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                    </span>{persons} persons group
                </p>
                <p class="flex items-center mb-2 text-black group-hover:text-white">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                    </span>{places} placces
                </p>
                <p class="flex items-center text-black mb-6 group-hover:text-white">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                    </span>1 night cruise
                </p>
                <Link to={`/packagedetails/${_id}`}>
                    <button class="flex items-center mt-auto text-white bg-green-400 border-0 py-2 px-4 w-full focus:outline-none group-hover:bg-white group-hover:text-green-400 rounded">PACKAGE DETAILS
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </Link>
                <p class="text-xs text-gray-500 mt-3">Travelling is the food and contentment of heart.</p>
            </div>
        </div>


    );
};

export default PackageCard;