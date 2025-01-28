"use client"
import { useState } from "react"
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";


const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();



    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "") {
            toast.error("Email is required");
            return;
        } else if (password == "") {
            toast.error("Password is required");
            return;
        }

        try {

            setLoading(true);
            await axios.post(`${DOMAIN}/api/user/login`, { email, password });
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

                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-3  outline-none mb-2 w-full font-semibold text-gray-700 rounded-sm my-auto  border shadow-stone-900'
                    type="text" placeholder='Enter your Email' />
                <input

                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-3 outline-none  mb-2 w-full font-semibold text-gray-700 rounded-sm my-auto  border shadow-stone-900'
                    type="password" placeholder='Enter your password' />
                <button disabled={loading}
                    className='bg-gray-700 hover:bg-gray-800 text-white p-4 rounded-lg w-full font-bold text-lg'
                    type={'submit'}>
                    {loading ? "Loading..." : "Login"}
                </button>
            </form>
        </>
    )
}

export default LoginForm