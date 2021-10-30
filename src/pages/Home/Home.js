import React from 'react'
import Trips from '../Trips/Trips';

import Banner from './banner/Banner';
import ChooseUs from './choose/ChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trips></Trips>
            <ChooseUs></ChooseUs>
        </div>
    )
}

export default Home;
