"use client"
import { useRef, useState } from "react"
import { toast } from "react-toastify";



const SearchInputComponent = () => {

    const [text, setText] = useState("");
    const submitHandler = (e: any) => {
        e.preventDefault();
        if (text === "") {
            toast.error("text is required");
            return;
        }
        console.log({ "text": text });
    }

    return (
        <>
            <form onSubmit={submitHandler} className='flex p-5 flex-col items-center' >

                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='p-3  outline-none mb-2 w-3/4 border border-lg border-purple-800 font-semibold text-gray-700 rounded-sm my-auto'
                    type="search" placeholder='Search For Article ' />


            </form>
        </>
    )
}

export default SearchInputComponent