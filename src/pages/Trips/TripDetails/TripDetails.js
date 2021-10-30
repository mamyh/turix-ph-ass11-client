import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Spinner from '../../../spiner/Spinner';

const TripDetails = () => {
    const [pakage, setPakage] = useState({});
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const { allContext } = useAuth();
    const { user } = allContext;
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://quiet-wave-83904.herokuapp.com/pakages/${id}`).then(res => { setPakage(res.data); setIsLoading(false) });
    }, []);
    const handleBook = () => {
        const { _id, ...data } = pakage;
        data.email = user.email;
        data.status = 'pending';
        console.log(data);
        axios.post(`https://quiet-wave-83904.herokuapp.com/orders`, data).then(res => {
            if (res.data.insertedId) {
                alert('Your orders are pending');
                history.push('/your-trips')
            }
        })
    }
    if (isLoading) {
        return (<Spinner></Spinner>)
    }
    const { _id, name, price, date, img, rating } = pakage;
    return (
        <div className="h-screen md:flex items-center justify-center">
            <div className="bg-white w-3/5 hover:shadow-lg space-x-4 rounded-md flex">
                <div className=" flex-none w-1/2">
                    <img className="w-full" src={img} alt="pakage " />
                </div>
                <div className=" flex-auto flex justify-between my-8 pr-4 ">
                    <div className=" flex-auto space-y-4">
                        <h1 className="text-xl text-gray-600 font-semibold">${price}/per person</h1>
                        <h1 className="text-2xl font-bold text-yellow-500">{name}</h1>
                        <p className="text-xl text-gray-600 font-semibold">{rating}k+Rating</p>
                    </div>
                    <div className=" flex-none text-xl text-gray-600 font-semibold">
                        {date}days /{+date + 1} nights
                        <div className="mt-8">
                            <button type="button" onClick={handleBook} className="text-xl text-white bg-yellow-600 inline-block px-8 rounded-bl-full rounded-tl-full rounded-br-full rounded-tr-full" to={`/trips/${_id}`}>Book</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TripDetails;
