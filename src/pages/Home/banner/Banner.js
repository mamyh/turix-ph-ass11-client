import React from 'react';
import { Link } from 'react-router-dom';
import "./banner.css";

const Banner = () => {
    return (
        <div className="h-96">
            <div className=" w-full h-full  custom-banner block md:flex justify-center items-center text-center">
                <div className="md:w-1/2 w-screen py-8 md:py-0" >
                    <h1 className="text-3xl font-bold text-white">Safari Trip in Indonesia <span className="block" >With George</span></h1>

                    <div className="my-8 w-screen md:w-full space-x-8">
                        <Link className=" inline-block rounded-lg border-2 bg-transparent border-current text-white w-1/4" to="/trips">Our trips</Link>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner
