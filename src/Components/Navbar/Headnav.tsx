"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FiCoffee } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

interface NavbarProps {
    isAdmin: boolean;
}

const Headnav = ({ isAdmin }: NavbarProps) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle((prev) => !prev);

    return (
        <>
            <div className="nav-brand">
                <Link href="/" className="navigator" style={{ display: "flex", alignItems: "center" }}>
                    <FiCoffee size={"30px"} />{" "} Publisher
                </Link>
            </div>
            <div className="menu">
                {toggle ? (
                    <IoMdClose onClick={handleToggle} size={"30px"} />
                ) : (
                    <AiOutlineMenu onClick={handleToggle} size={"30px"} />
                )}
            </div>
            <div className={`nav-items-wrapper`}
                style={
                    { clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || "" }
                }
            >
                <ul className="nav_items flex justify-start">
                    <li>
                        <Link href="/" onClick={handleToggle} className="nav_item">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={handleToggle} className="nav_item">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/articles?pageNumber=1" onClick={handleToggle} className="nav_item">
                            Articles
                        </Link>
                    </li>
                    {isAdmin && (
                        <li>
                            <Link href="/admin" onClick={handleToggle} className="nav_item">
                                Admin
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default Headnav;
