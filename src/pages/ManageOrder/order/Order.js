import React from 'react'
import { Link } from 'react-router-dom';

const Order = ({ order }) => {
    const { _id, name, price, email, date, status, rating, img } = order;


    return (
        <div className="bg-white hover:shadow-lg rounded-md">
            <div className="w-full">
                <img className="w-full" src={img} alt="pakage " />
            </div>
            <div className="flex justify-between my-8 px-4">
                <div className="space-y-4">
                    <h1 className="text-xl text-gray-600 font-semibold">${price}/per person</h1>
                    <h1>Orders Person:{email}</h1>
                    <h1 className="text-2xl font-bold text-yellow-500">{name}</h1>
                    <p className="text-xl text-gray-600 font-semibold">{rating}k+Rating</p>
                </div>
                <div className="text-xl text-gray-600 font-semibold space-y-16 pl-4 text-center">
                    <p >{date}days/{+date + 1}nights</p>
                    <p className={status === 'pending' ? 'bg-yellow-400 text-white ' : 'bg-green-400 text-black '}>{status}</p>
                </div>
            </div>
            <div className="text-center mb-8">
                <Link className="text-xl text-white bg-yellow-600 inline-block w-1/3 p-2 rounded-bl-full rounded-tl-full rounded-br-full rounded-tr-full" to={`/order/${_id}`}>Details</Link>
            </div>
        </div>
    )
}

export default Order;
