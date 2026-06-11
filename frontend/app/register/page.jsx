"use client"

import { useState } from "react";
import API from "@/lib/api";


export default function Register() {


    const [form, setForm] = useState({

        name: "",
        email: "",
        password: ""

    });



    const handleChange = (e) => {


        setForm({

            ...form,

            [e.target.name]: e.target.value

        });


    };



    const submit = async () => {


        try {


            await API.post(

                "/auth/register",

                form

            );


            alert("Registered Successfully");


        }
        catch (err) {

            console.log(err);

        }


    };



    return (

        <div className="p-10">


            <h1 className="text-3xl mb-5">
                Register
            </h1>


            <input
                className="border p-2 block mb-3"
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />


            <input
                className="border p-2 block mb-3"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />


            <input
                className="border p-2 block mb-3"
                name="password"
                placeholder="Password"
                onChange={handleChange}
            />


            <button

                className="bg-black text-white p-2"

                onClick={submit}

            >

                Register

            </button>


        </div>

    )

}