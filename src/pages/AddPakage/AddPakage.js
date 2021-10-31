import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddPakage.css";

const AddPakage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post(`https://quiet-wave-83904.herokuapp.com/pakages`, data).then(res => {
            if (res.data.insertedId) {
                alert('Pakage is added');
                reset();
            }
        })
    }
    // console.log(Object.values(errors)[0].ref.current)
    return (
        <div className="md:h-screen md:pt-16 md:w-4/5  md:flex items-center justify-center">
            <div className=" space-y-12 bg-white p-6  w-2/3 md:hover:shadow-lg rounded-md">
                <h1>Please Add a Pakage</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full" >

                    <input placeholder="your name"   {...register("name", { required: true })} />
                    <input placeholder="price" type="number" {...register("price", { required: true })} />
                    <input placeholder="time to stay" type="number" {...register("date", { required: true, min: 2, max: 10 })} />
                    <input placeholder="rating"  {...register("rating", { required: true })} />
                    <input placeholder="image link"  {...register("img", { required: true })} />

                    {/* {errors && Object.values(errors).map(value => <span key={Math.random()} >{`${value.ref.current}is ${value.type}`}</span>)} */}

                    <input type="submit" value="Add" />
                </form>
            </div>
        </div>
    )
}

export default AddPakage
