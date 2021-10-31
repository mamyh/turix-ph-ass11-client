import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Spinner from '../../../spiner/Spinner';

const OrderDetails = () => {
    const [order, setOrder] = useState({})

    const [isLoading, setIsLoading] = useState(true);


    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://quiet-wave-83904.herokuapp.com/orders/${id}`).then(res => { setOrder(res.data); setIsLoading(false) });
    }, []);
    const handleBook = () => {

    }
    if (isLoading) {
        return (<Spinner></Spinner>)
    }
    const { _id, name, price, date, img, rating } = order;
    console.log(order)
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-white md:w-3/5 w-full hover:shadow-lg space-x-4 rounded-md md:flex">
                <div className=" flex-none w-full md:w-1/2">
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
                            <button type="button" onClick={handleBook} className="text-xl text-white bg-yellow-600 inline-block px-8 rounded-bl-full rounded-tl-full rounded-br-full rounded-tr-full">Edit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OrderDetails;
