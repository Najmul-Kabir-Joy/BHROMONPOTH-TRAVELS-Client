import React, { useEffect, useState } from 'react';
import GalaryImg from '../GalaryImg/GalaryImg';

const AllPhotos = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allphotos')
            .then(res => res.json())
            .then(data => setItems(data));

    }, [])
    return (
        <div>
            <div className='text-center pt-4 pb-10'>
                <h1 className='text-3xl inline border-b-2 border-green-400'>GALARY</h1>
            </div>
            <div class=" mx-auto p-5">
                {
                    items.length ?
                        <section class="pt-0 px-4">
                            <div class="flex flex-wrap -mx-4">
                                {
                                    items.map(item => <GalaryImg key={item._id} item={item}></GalaryImg>)
                                }
                            </div>
                        </section>
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
        </div>
    );
};

export default AllPhotos;