import React, { useEffect, useState } from 'react';
import PackageCard from '../PackageCard/PackageCard';

const AllPackages = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/packagelist')
            .then(res => res.json())
            .then(data => setList(data.packages))
    }, [])
    return (
        <div>
            <div className='text-center py-10'>
                <h1 className='text-3xl inline border-b border-green-400'>OUR ALL ACTIVE PACKAGES</h1>
            </div>
            <section class="text-gray-600 body-font overflow-hidden pb-36">
                <div class="container px-5 py-4 mx-auto">
                    {
                        list.length > 0 ?
                            <div class="flex flex-wrap -m-4">
                                {
                                    list.map(item => <PackageCard key={item._id} item={item}></PackageCard>)
                                }
                            </div>
                            :
                            <div class="flex justify-center items-center py-20">
                                <div
                                    class="
                                    animate-spin
                                    rounded-full
                                    h-32
                                    w-32
                                    border-t-2 border-b-2 border-green-500
                                "
                                >

                                </div>
                            </div>
                    }
                </div>
            </section>
        </div>
    );
};

export default AllPackages;