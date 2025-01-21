import "./Navbar.css"
import { FaRegCircleUser } from "react-icons/fa6";

import Headnav from "./Headnav";
import Link from 'next/link'

import { verifyTokenForPages } from "@/utils/verfyJwt";
import getToken from "@/getToken/getToken";
import LogoutButton from "./LogoutButton";


async function NavBar() {

    const token = await getToken()
    const user = verifyTokenForPages(token)


    return (
        <>
            <div className="nav_Container">
                <Headnav />
                <div className="resgestration_item_wrapper">
                    {
                        user ? (<>
                            <div className="mx-2 flex justify-content-end items-center">
                                <FaRegCircleUser size={30} />
                                <Link href="/" >
                                    <span style={{ textTransform: "capitalize" }} className='text-blue-700 font-bold md:text-xl mx-2'>
                                        {user?.name}
                                    </span>
                                </Link>
                            </div>
                            <LogoutButton />


                        </>) : (<>
                            <button >
                                <Link href={"/login"}>Login</Link>
                            </button>
                            <button >
                                <Link href={"/register"}>Register</Link>
                            </button>

                        </>)
                    }
                </div>
            </div>
        </>
    );
}

export default NavBar;