import "./Navbar.css"
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";

import Headnav from "./Headnav";
import Link from 'next/link'
import { verifyTokenForPages } from "@/utils/verfyJwt";
import LogoutButton from "./LogoutButton";
import { cookies } from "next/headers";

async function NavBar() {

    const token = (await cookies()).get("jwtToken")?.value || "";
    const user = verifyTokenForPages(token);



    return (
        <>
            <div className="nav_Container">
                <Headnav isAdmin={user?.isAdmin || false} />
                <div className="resgestration_item_wrapper">
                    {
                        user ? (<>
                            <div className="mx-2 flex justify-content-end items-center">
                                {user.isAdmin ? (<>
                                    <FaUserCog size={30} /></>) :
                                    (<> <FaRegCircleUser size={30} /></>)}

                                <Link href="/" >
                                    <span style={{ textTransform: "capitalize" }} className=' text-teal-700 font-bold md:text-xl mx-2'>
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