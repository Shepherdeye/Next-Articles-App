import "./Navbar.css"
import Headnav from "./Headnav";
import Link from 'next/link'
function NavBar() {
    return (
        <>
            <div className="nav_Container">
                <Headnav />
                <div className="resgestration_item_wrapper">
                    <button >
                        <Link href={"/login"}>Login</Link>
                    </button>
                    <button >
                        <Link href={"/register"}>Register</Link>
                    </button>
                </div>
            </div>
        </>
    );
}

export default NavBar;