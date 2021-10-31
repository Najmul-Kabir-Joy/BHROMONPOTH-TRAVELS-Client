import React from 'react';
import './GalaryImg.css';

const GalaryImg = (props) => {
    const { photoUrl, title } = props.item;
    return (
        <>
            <div class="md:w-full mb-8 galary-photo mr-10" data-aos='flip-left' data-aos-duration="3000" data-aos-delay='500'>
                <img class="rounded-xl shadow-2xl single-photo w-full h-80" src={photoUrl} alt="" />
                <div class="photo-detail rounded-xl">
                    <p className='pt-20 text-green-400'>{title}</p>
                </div>
            </div>
        </>
    );
};

export default GalaryImg;