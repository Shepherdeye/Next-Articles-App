"use client"
import { useState } from "react"
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';


const SearchInputComponent = () => {
    const pageRoute = useRouter();
    const [text, setText] = useState("");
    const submitHandler = (e: any) => {
        e.preventDefault();
        if (text === "") {
            toast.error("text is required");
            return;
        }
        pageRoute.replace(`/articles/search?searchtext=${text}`)
    }

    return (
        <>
            <form onSubmit={submitHandler} className='flex p-5 flex-col items-center' >

                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='p-3  outline-none mb-2 w-full hover:border border-lg border-purple-800 font-semibold text-gray-700 rounded-sm my-auto'
                    type="search" placeholder='Search For Article ' />


            </form>
        </>
    )
}

export default SearchInputComponent