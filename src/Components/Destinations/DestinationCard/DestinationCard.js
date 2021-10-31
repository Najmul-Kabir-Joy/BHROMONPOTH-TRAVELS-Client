import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = (props) => {
    const { item } = props;
    const {
        _id, countryname, shorttitle, bannerimg,
    } = item;
    return (
        <Link to={`/destinationdetails/${_id}`} className='py-10'>
            <div class="bg-white rounded-lg shadow-lg w-full transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: `url(${bannerimg})` }}>
                <div class="bg-black bg-opacity-20 h-100 px-10 flex flex-wrap flex-col py-24 hover:bg-opacity-75 transform duration-300">
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 h-20 overflow-ellipsis overflow-hidden ...">
                        {shorttitle}
                    </p>
                </div>
                <div className='bg-green-300 text-white'>
                    <h2 class="font-bold mb-2 text-2xl">
                        {countryname}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default DestinationCard;