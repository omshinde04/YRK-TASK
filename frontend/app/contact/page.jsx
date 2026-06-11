"use client"

import { useState } from "react"
import API from "@/lib/api"


export default function Contact() {


    const [form, setForm] = useState({

        name: "",
        email: "",
        subject: "",
        message: ""

    });



    const handleChange = (e) => {


        setForm({

            ...form,

            [e.target.name]: e.target.value

        })

    }



    const submit = async () => {


        await API.post(
            "/contact",
            form
        )


        alert("Message Sent")


    }



    return (

        <div className="p-10">


            <input
                name="name"
                onChange={handleChange}
                placeholder="Name"
            />


            <input
                name="email"
                onChange={handleChange}
                placeholder="Email"
            />


            <input
                name="subject"
                onChange={handleChange}
                placeholder="Subject"
            />


            <textarea

                name="message"

                onChange={handleChange}

            />


            <button

                onClick={submit}

            >

                Send

            </button>


        </div>

    )

}