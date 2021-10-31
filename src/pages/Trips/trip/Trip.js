import React from 'react'
import { Link } from 'react-router-dom';

const Trip = ({ pakage }) => {
    const { _id, name, price, date, rating, img } = pakage;


    return (
        <div className="bg-white hover:shadow-lg rounded-md mb-8">
            <div className="w-full">
                <img className="w-full" src={img} alt="pakage " />
            </div>
            <div className="flex justify-between my-8 px-4">
                <div className="space-y-4">
                    <h1 className="text-xl text-gray-600 font-semibold">${price}/per person</h1>
                    <h1 className="text-2xl font-bold text-yellow-500"><i className="fas fa-map-marker-alt"></i> {name}</h1>
                    <p className="text-xl text-gray-600 font-semibold"><i className="fas fa-star"></i> {rating}k+Rating</p>
                </div>
                <div className="text-xl text-gray-600 font-semibold">
                    {date}days /{+date + 1} nights
                </div>
            </div>
            <div className="text-center mb-8">
                <Link className="text-xl text-white bg-yellow-600 inline-block w-1/3 p-2 rounded-bl-full rounded-tl-full rounded-br-full rounded-tr-full" to={`/trips/${_id}`}>Details</Link>
            </div>
        </div>
    )
}

export default Trip
