import React from 'react';
import './GalaryImg.css';

const GalaryImg = (props) => {
    const { photoUrl, title } = props.item;
    return (
        <>
            <div class="md:w-1/4 mb-8 galary-photo mr-10">
                <img class="rounded-xl shadow-2xl single-photo" src={photoUrl} alt="" />
                <div class="photo-detail rounded-xl">
                    <p className='pt-20 text-green-400'>{title}</p>
                </div>
            </div>
        </>
    );
};

export default GalaryImg;