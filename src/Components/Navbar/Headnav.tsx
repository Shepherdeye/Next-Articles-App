"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { FiCoffee } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
const Headnav = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className="nav-brand">
                <Link style={{ display: "flex", alignItems: "center" }} className="navigator" href="/home">FS

                    <FiCoffee size={"30px"} />

                    Clould </Link>

            </div>
            <div className="menu">
                {toggle ? (<IoMdClose onClick={() => setToggle(prev => !prev)} size={"30px"} />) : (<AiOutlineMenu onClick={() => setToggle(prev => !prev)} size={"30px"} />)}
            </div>
            <div className='nav-items-wrapper'

                style={{
                    clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || ""
                }}
            >
                <ul className="nav_items">
                    <Link onClick={() => setToggle(false)} href={"/"} className="nav_item ">Home</Link>
                    <Link onClick={() => setToggle(false)} href={"/about"} className="nav_item">About</Link>
                    <Link onClick={() => setToggle(false)} href={"/articles"} className="nav_item">Articles</Link>
                    <Link onClick={() => setToggle(false)} href={"/admin"} className="nav_item">Admin</Link>
                </ul>
            </div>

        </>
    )
}

export default Headnav