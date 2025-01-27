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
            <form
                onSubmit={submitHandler}
                className="my-4 w-full md:w-2/3 lg:w-1/2 bg-white rounded-lg shadow-md flex items-center"
            >
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="p-4 w-full outline-none border-2 border-gray-300 rounded-l-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700"
                    type="search"
                    placeholder="Search for an article"
                />
                <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-black font-semibold px-6 py-3 rounded-r-lg transition-all"
                >
                    Search
                </button>
            </form>
        </div>

    )
}

export default SearchInputComponent