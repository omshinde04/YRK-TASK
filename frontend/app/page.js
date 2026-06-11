"use client"

import { useEffect, useState } from "react"
import API from "@/lib/api"


export default function Home() {


  const [home, setHome] = useState({});



  useEffect(() => {

    loadHome();

  }, [])



  const loadHome = async () => {


    try {

      const res =
        await API.get("/home");


      setHome(res.data);


    }
    catch (err) {

      console.log(err)

    }


  }




  return (

    <div className="p-10">


      <img
        src={home.image}
        className="w-96 rounded"
      />


      <h1 className="text-3xl font-bold">

        {home.title}

      </h1>


      <p>

        {home.description}

      </p>


    </div>

  )

}