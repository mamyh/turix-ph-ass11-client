import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Spinner from '../../spiner/Spinner';
import YourTrip from './YourTrip/YourTrip';

const YourTrips = () => {
    const [pakages, setPakages] = useState([]);
    const [count, setCount] = useState(0);
    const { allContext } = useAuth();
    const { user } = allContext;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const email = user.email;
        axios.get(`https://quiet-wave-83904.herokuapp.com/orders/email/${email}`).then(res => { setPakages(res.data); setCount(pakages.length); setIsLoading(false) });
    }, [count]);


    const handleCancel = (id) => {

        const url = `https://quiet-wave-83904.herokuapp.com/orders/${id}`;
        const confimation = window.confirm('Are you sure you want to delete your order?');
        if (confimation) {
            axios.delete(url).then(res => {
                if (res.data.deletedCount) {
                    alert('your pakage order delete successfully');
                    setCount(pakages.length);
                }
            });
        }
    }
    if (isLoading) {
        return <Spinner></Spinner>
    }
    console.log(count);
    return (
        <div className={!pakages.length ? `h-screen md:py-16 w-full md:flex items-center justify-center` : `h-auto md:py-16 w-full md:flex items-center justify-center `}>
            <div className="w-5/6">
                <h1 className="text-center text-2xl text-yellow-600 font-bold my-8 border-current border-b pb-2 inline-block">{count ? 'Your trips' : `you have no trips`}</h1>
                <div className="md:grid grid-cols-3 gap-6">
                    {pakages.map(pakage => <YourTrip key={pakage._id} pakage={pakage} cancel={handleCancel} ></YourTrip>)}
                </div>
            </div>
        </div>
    )
}


export default YourTrips;
