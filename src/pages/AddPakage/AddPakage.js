import React from 'react';
import { useForm } from "react-hook-form";

const AddPakage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="md:h-screen md:pt-16 md:w-4/5 ">
            <h1>Please Add a Pakage</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}

                <input type="submit" />
            </form>
        </div>
    )
}

export default AddPakage
