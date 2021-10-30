import React from 'react';

const Galary = () => {
    return (
        <div>
            <div className='text-center my-16'>
                <h1 className='text-5xl inline border-b-2 border-green-400'>GALARY</h1>
            </div>
            <div class=" mx-auto p-5">
                <div class="grid-cols-3 p-10 space-y-2 bg-green-200 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
                    <div class="w-full rounded">
                        <img src='https://source.unsplash.com/random/1280x720'
                            alt="a" />
                    </div>
                    <div class="w-full col-span-2 row-span-2 rounded">
                        <img src="https://source.unsplash.com/random/1280x720"
                            alt="a" />
                    </div>
                    <div class="w-full rounded">
                        <img src="https://source.unsplash.com/random/1280x720"
                            alt="a" />
                    </div>
                    <div class="w-full rounded">
                        <img src="https://source.unsplash.com/random/1280x720"
                            alt="a" />
                    </div>
                    <div class="w-full rounded">
                        <img src="https://source.unsplash.com/random/1280x720"
                            alt="a" />
                    </div>
                    <div class="w-full rounded">
                        <img src="https://source.unsplash.com/random/1280x720"
                            alt="a" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Galary;