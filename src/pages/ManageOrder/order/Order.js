import React from 'react';


const Order = ({ order, handleDelete, updateStatus }) => {
    const { _id, name, price, email, date, status, rating, img } = order;


    return (
        <div className="bg-white hover:shadow-lg rounded-md">
            <div className="w-full">
                <img className="w-full" src={img} alt="pakage " />
            </div>
            <div className=" my-8 px-4">
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <h1 className="text-xl text-gray-600 font-semibold">${price}/per person</h1>
                        <p >{date}days/{+date + 1}nights</p>

                    </div>
                    <h1><i className="fas fa-envelope">   </i><span className="text-grey-600 font-bold">{`  ${email}`}</span></h1>
                    <h1 className="text-2xl font-bold text-yellow-500"><i className="fas fa-map-marker-alt"></i> {name}</h1>

                </div>
            </div>
            <div className="mx-3 flex justify-between">
                <p className="text-xl text-gray-600 font-semibold"><i className="fas fa-star"></i> {rating}k+Rating</p>
                <p className={status === 'pending' ? 'bg-yellow-200 px-4 rounded-lg ' : 'bg-green-200 px-4 rounded-lg text-black '}>{status}</p>
            </div>
            <div className="text-center my-8 space-x-4">
                <button type="button" className="text-xl bg-green-200 inline-block w-1/3 p-2 rounded-bl-full rounded-tl-full rounded-br-full rounded-tr-full" onClick={() => updateStatus(_id)}>update</button>
                <button className="text-xl bg-red-200 inline-block w-1/3 p-2 rounded-bl-full rounded-tl-full rounded-br-full rounded-tr-full" type="button" onClick={() => handleDelete(_id)}>Delete</button>

            </div>
        </div>
    )
}

export default Order;
