
import React from 'react';


const YourTrip = ({ pakage, cancel }) => {

    const { _id, name, price, date, rating, status, img } = pakage;


    return (
        <div className="bg-white hover:shadow-lg rounded-md">
            <div className="w-full">
                <img className="w-full" src={img} alt="pakage " />
            </div>
            <div className="flex  my-8 px-2">
                <div className="space-y-4">
                    <h1 className="text-xl 
                    text-gray-600 font-semibold">${price}/person</h1>
                    <h1 className="text-2xl font-bold text-yellow-500">{name}</h1>
                    <p className="text-xl text-gray-600 font-semibold">{rating}k+Rating</p>
                </div>
                <div className="text-xl text-gray-600 space-y-16 pl-4 text-center">
                    <p >{date}days/{+date + 1}nights</p>
                    <p className={status === 'pending' ? 'bg-yellow-400 text-white ' : 'bg-green-400 text-black '}>{status}</p>
                </div>
            </div>
            <div className="text-center mb-8">
                <button type="button" onClick={() => cancel(_id)}>Cancel</button>
            </div>
        </div>
    )
}

export default YourTrip;
