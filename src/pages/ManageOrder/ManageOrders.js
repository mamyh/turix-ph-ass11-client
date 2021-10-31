import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Spinner from '../../spiner/Spinner';
import Order from './order/Order';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        axios.get(`https://quiet-wave-83904.herokuapp.com/orders`).then(res => { setOrders(res.data); setCount(orders.length); setIsLoading(false) });
    }, []);
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className={count ? 'h-auto md:py-16 w-full md:flex items-center justify-center ' : "h-screen md:py-16 w-full md:flex items-center justify-center "}>
            <div className="w-5/6">
                <h1 className="text-center text-2xl text-yellow-600 font-bold my-8 border-current border-b pb-2 inline-block">{count ? 'You have no order to manage' : 'Manage orders'}</h1>
                <div className="md:grid grid-cols-3 gap-6">
                    {orders.map(order => <Order key={order._id} order={order} ></Order>)}
                </div>
            </div>
        </div>
    )
}




export default ManageOrders;
