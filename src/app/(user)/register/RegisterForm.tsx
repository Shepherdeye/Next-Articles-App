"use client"
import { useState } from "react"
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";


const RegisterForm = () => {


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();



    const submitHandler = async (e: any) => {
        e.preventDefault();
        if (name === "") {
            toast.error("name is required");
            return;
        } else if (email == "") {
            toast.error("Email is required");
            return;
        }
        else if (password == "") {
            toast.error("Password is required");
            return;
        }
        else if (password !== confirmPassword) {
            toast.error("Password not Matched");
            return;
        }

        try {

            setLoading(true);
            await axios.post(`${DOMAIN}/api/user/register`, { name, email, password });
            router.replace('/');
            setLoading(false);
            router.refresh();

        } catch (error: any) {

            toast.warning(error?.response?.data.message);
            setLoading(false)
        }


    }

    return (
        <>
            <form onSubmit={submitHandler} className=' w-full  flex p-5 flex-col  items-center' >
                <input
                    value={name}
                    maxLength={15}
                    onChange={(e) => setName(e.target.value)}
                    className='p-3  outline-none mb-2 w-full font-semibold text-gray-700 rounded-sm my-auto  border shadow-stone-900'
                    type="text" placeholder='Enter your user name' />
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
                <input

                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='p-3 outline-none  mb-2 w-full font-semibold text-gray-700 rounded-sm my-auto  border shadow-stone-900'
                    type="password" placeholder='Confirm password' />
                <button
                    className='bg-gray-700 hover:bg-gray-800 text-white p-4 rounded-lg w-full font-bold text-lg'
                    type={'submit'}>
                    {loading ? "Loading..." : "Create Now"}
                </button>
            </form>
        </>
    )
}

export default RegisterForm