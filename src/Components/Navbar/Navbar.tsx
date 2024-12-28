import "./Navbar.css"
import Head from "./Head.tsx";
function NavBar() {
    return (
        <>
            <div className="nav_Container">
                <Head />
                <div className="resgestration_item_wrapper">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </>
    );
}

export default NavBar;