import Link from "next/link";


export default function Navbar() {


    return (

        <nav className="bg-black text-white p-4 flex justify-between">


            <h1 className="font-bold">
                YRK Task
            </h1>


            <div className="flex gap-5">


                <Link href="/">
                    Home
                </Link>


                <Link href="/login">
                    Login
                </Link>


                <Link href="/register">
                    Register
                </Link>


                <Link href="/contact">
                    Contact
                </Link>


            </div>


        </nav>

    )

}