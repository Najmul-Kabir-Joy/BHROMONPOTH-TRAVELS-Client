import React, { useEffect, useState } from 'react';
import DestinationCard from '../Destinations/DestinationCard/DestinationCard';

const AllDestinations = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/destinationlist')
            .then(res => res.json())
            .then(data => setList(data.destinatons));
    }, [])
    return (
        <div className='pb-52'>
            {
                list.length > 0 ?
                    <div className='pb-96 pt-10'>
                        <div className='text-center'>
                            <h1 className='text-3xl'>OUR SERVICES AT THE FOLLOWING DESTINATIONS</h1>
                            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 sm:gap-10 mx-10'>
                                {
                                    list.map(item => <DestinationCard key={item._id} item={item}></DestinationCard>)
                                }
                            </div>
                        </div>
                    </div>
                    : <div class="flex justify-center items-center pt-10">
                        <div
                            class="
                        animate-spin
                        rounded-full
                        h-32
                        w-32
                        border-t-2 border-b-2 border-green-500
                    "
                        ></div>
                    </div>
            }
        </div>
    );
};

export default AllDestinations;