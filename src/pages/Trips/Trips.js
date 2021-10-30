import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Trip from './trip/Trip';

const Trips = () => {
    const [pakages, setPakages] = useState([])
    useEffect(() => {
        axios.get(`https://quiet-wave-83904.herokuapp.com/pakages`).then(res => setPakages(res.data))
    }, [])
    return (
        <div className=" md:py-16 w-full md:flex items-center justify-center ">
            <div className="w-5/6">
                <h1 className="text-center text-2xl text-yellow-600 font-bold my-8 border-current border-b pb-2 inline-block">here is our all trips</h1>
                <div className="md:grid grid-cols-3 gap-6">
                    {pakages.map(pakage => <Trip key={pakage._id} pakage={pakage} ></Trip>)}
                </div>
            </div>
        </div>
    )
}

export default Trips
