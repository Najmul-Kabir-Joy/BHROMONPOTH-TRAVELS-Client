import React, { useEffect, useState } from 'react';
import MentorsCard from '../MentorsCard/MentorsCard';

const Mentors = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/activementors')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])
    return (
        <div className='container pb-96'>
            <div className='pt-5 pb-10'>
                <h1 className='lg:text-3xl text-xl border-b-2 border-green-400 inline'>OUR EXPERT MENTORS</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 sm:gap-10 mx-10'>
                {
                    list.map(item => <MentorsCard key={item._id} item={item}></MentorsCard>)
                }
            </div>

        </div>
    );
};

export default Mentors;