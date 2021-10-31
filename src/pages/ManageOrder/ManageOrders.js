import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Spinner from '../../spiner/Spinner';
import Order from './order/Order';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        axios.get(`https://quiet-wave-83904.herokuapp.com/orders`).then(res => { setOrders(res.data); setIsLoading(false) }).finally(() => setCount(orders.length))
    }, [count]);
    const updateStatus = (id) => {
        const data = {};
        data.status = 'approved';
        axios.put(`https://quiet-wave-83904.herokuapp.com/orders/${id}`, data).then(res => {
            if (res.data.modifiedCount) {
                alert('your orders is approved!')
                setCount(count + 1);
            }
        });
    }
    const handleDelete = (id) => {

        const url = `https://quiet-wave-83904.herokuapp.com/orders/${id}`;
        const confimation = window.confirm('Are you sure you want to delete your order?');
        if (confimation) {
            axios.delete(url).then(res => {
                if (res.data.deletedCount) {
                    alert('your order delete successfully');
                    setCount(orders.length);
                }
            });
        }
    }
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className={orders.length ? 'h-auto md:py-16 w-full md:flex items-center justify-center ' : "h-screen md:py-16 w-full md:flex items-center justify-center "}>
            <div className="w-5/6">
                <h1 className="text-center text-2xl text-yellow-600 font-bold my-8 border-current border-b pb-2 inline-block">{!orders.length ? 'You have no order to manage' : 'Manage orders'}</h1>
                <div className="md:grid grid-cols-3 gap-6">
                    {orders.map(order => <Order key={order._id} order={order} handleDelete={handleDelete} updateStatus={updateStatus}></Order>)}
                </div>
            </div>
        </div>
    )
}




export default ManageOrders;
