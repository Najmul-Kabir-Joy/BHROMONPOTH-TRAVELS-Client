import React, { useEffect, useState } from 'react';
import GalaryImg from './GalaryImg/GalaryImg';

const Galary = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://ghastly-nightmare-99427.herokuapp.com/allphotos')
            .then(res => res.json())
            .then(data => setItems(data));

    }, [])
    return (
        <div>
            <div className='text-center my-16'>
                <h1 className='text-5xl inline border-b-2 border-green-400'>GALARY</h1>
            </div>
            <div class="container mx-auto p-5">
                {
                    items.length ?
                        <section class="pt-0 px-4">
                            <div class="grid grid-cols-3 -mx-4 gap-10">
                                {
                                    items.slice(0, 6).map(item => <GalaryImg key={item._id} item={item}></GalaryImg>)
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

export default Galary;