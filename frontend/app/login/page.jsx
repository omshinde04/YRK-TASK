"use client"


export default function Login() {


    const googleLogin = () => {


        window.location.href =

            "http://localhost:5050/auth/google/login"


    }



    return (

        <div className="h-screen flex justify-center items-center">


            <div className="border p-10 rounded shadow">


                <h1 className="text-3xl font-bold mb-5">

                    Login

                </h1>


                <button

                    onClick={googleLogin}

                    className="bg-black text-white px-5 py-3 rounded"

                >

                    Continue with Google

                </button>


            </div>


        </div>

    )


}