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
        pageRoute.replace(`/articles/search?searchText=${text}`)
    }

    return (
        <div className="w-full flex justify-center">
            <form onSubmit={submitHandler} className='my-5 w-full md:w-2/3 m-auto bg-gray-300 h-12 rounded' >

                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='p-3  outline-none mb-2 w-full hover:border border-lg border-purple-800 font-semibold text-gray-700 rounded-sm my-auto'
                    type="search" placeholder='Search For Article ' />


            </form>
        </div>
    )
}

export default SearchInputComponent