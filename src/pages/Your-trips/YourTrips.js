import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../../spiner/Spinner';
import YourTrip from './YourTrip/YourTrip';

const YourTrips = () => {
    const [pakages, setPakages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://quiet-wave-83904.herokuapp.com/orders`).then(res => { setPakages(res.data); setIsLoading(false) });
    }, []);
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className=" md:py-16 w-full md:flex items-center justify-center ">
            <div className="w-5/6">
                <h1 className="text-center text-2xl text-yellow-600 font-bold my-8 border-current border-b pb-2 inline-block">Your trips</h1>
                <div className="md:grid grid-cols-3 gap-6">
                    {pakages.map(pakage => <YourTrip key={pakage._id} pakage={pakage} ></YourTrip>)}
                </div>
            </div>
        </div>
    )
}


export default YourTrips;
