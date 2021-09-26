import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault(); 
        setName(data.fullname);
        console.log(data);
        e.target.reset(); 
    };
    const [ name, setName ] = useState('');

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-2xl font-semibold">
            Want to get in touch?
            </h4>
            <p className="leading-relaxed mt-1 mb-4 text-gray-600">
            Complete this form and we will get back to you in 24 hours.
            </p>
        
            <div className="relative w-full mb-3 mt-8">
            <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="full-name"
            >
                Full Name
            </label>
            
            <input 
                name="fullname" 
                ref={register} 
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="Full Name"
                style={{ transition: "all .15s ease" }}/>
            </div>

            <div className="relative w-full mb-3">
            <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
            >
                Email
            </label>
            <input
                type="email"
                name="email" 
           
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="Enter Your Email Address"
                style={{ transition: "all .15s ease" }}
            />
            </div>

            <div className="relative w-full mb-3">
            <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
            >
                Message
            </label>
            <textarea
                rows="4"
                cols="80"
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="Type a message..."
                name="message" 
                ref={register} 
            />
            </div>
            <div className="text-center mt-6">
                <input className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="submit" />
            </div>
        </form>
    
    )
}

export default Form;