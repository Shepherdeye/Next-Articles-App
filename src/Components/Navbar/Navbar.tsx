import "./Navbar.css"
import Headnav from "./Headnav";
import Link from 'next/link'

import { verifyTokenForPages } from "@/utils/verfyJwt";
import getToken from "@/getToken/getToken";


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

                            {user.name}


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