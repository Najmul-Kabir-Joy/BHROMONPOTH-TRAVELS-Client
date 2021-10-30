import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Galary from '../Galary/Galary';
import Packages from '../Packages/Packages';
import Quote from '../Quote/Quote';
import Review from '../Review/Review';
import WhyUs from '../WhyUs/WhyUs';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyUs></WhyUs>
            <Destinations></Destinations>
            <Quote></Quote>
            <Packages></Packages>
            <Galary></Galary>
            <Review></Review>
        </div>
    );
};

export default HomePage;