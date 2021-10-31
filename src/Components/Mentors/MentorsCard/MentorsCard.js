import React from 'react';

const MentorsCard = (props) => {
    const { name, des, photo, job, location, email } = props.item;
    return (

        <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-2xl border-2 border-green-400 hover:bg-green-400 group hover:border-white hover:transition duration-500 ease-in-out">
            <img class="object-cover object-center w-full h-44" src={photo} alt="avatar" />
            <div class="px-6 py-4">
                <h1 class="text-xl font-semibold text-gray-800 group-hover:text-white">{name}</h1>

                <p class="py-2 text-gray-700 dark:text-gray-400 group-hover:text-white">{des}</p>

                <div class="flex items-center mt-4 text-gray-700 group-hover:text-white">
                    <i class="fas fa-briefcase text-green-400 group-hover:text-white"></i>


                    <h1 class="px-2 text-sm">{job}</h1>
                </div>

                <div class="flex items-center mt-4 text-gray-700 group-hover:text-white">
                    <i class="fas fa-map-marker-alt text-green-400 group-hover:text-white"></i>
                    <h1 class="px-2 text-sm">{location}</h1>
                </div>

                <div class="flex items-center mt-4 text-gray-700 group-hover:text-white">
                    <i class="fas fa-envelope text-green-400 group-hover:text-white"></i>

                    <h1 class="px-2 text-sm">{email}</h1>
                </div>
            </div>
        </div>
    );
};

export default MentorsCard;