"use client"
import { useState } from "react"
import { toast } from "react-toastify";



const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = (e: any) => {
        e.preventDefault();
        if (email === "") {
            toast.error("Email is required");
            return;
        } else if (password == "") {
            toast.error("Password is required");
            return;
        }
        console.log({ "email": email, "password": password });
    }

    return (
        <>
            <form onSubmit={submitHandler} className=' w-full  flex p-5 flex-col  items-center' >
                <input

                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-3  outline-none mb-2 w-full font-semibold text-gray-700 rounded-sm my-auto  border shadow-stone-900'
                    type="text" placeholder='Enter your Email' />
                <input

                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-3 outline-none  mb-2 w-full font-semibold text-gray-700 rounded-sm my-auto  border shadow-stone-900'
                    type="password" placeholder='Enter your password' />
                <button
                    className='bg-gray-700 hover:bg-gray-800 text-white p-4 rounded-lg w-full font-bold text-lg'
                    type={'submit'}>
                    Login
                </button>
            </form>
        </>
    )
}

export default LoginForm