import axios from 'axios';
import React from 'react';


const YourTrip = ({ pakage }) => {
    const { _id, name, price, date, rating, img } = pakage;

    const handleCancel = () => {
        const url = `https://quiet-wave-83904.herokuapp.com/orders/${_id}`;
        axios.delete(url).then(res => {
            if (res.data.deletedCount) {
                alert('your pakage order delete successfully');
            }
        })
    }
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
                <div className="text-xl text-gray-600 ">
                    {date}days/{+date + 1}nights
                </div>
            </div>
            <div className="text-center mb-8">
                <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default YourTrip;
