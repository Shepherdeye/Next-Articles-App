"use client"
import { useState } from "react"
import { toast } from "react-toastify";



const AddArticleForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const submitHandler = (e: any) => {
        e.preventDefault();
        if (title === "") {
            toast.error("title is required");
            return;
        } else if (description == "") {
            toast.error("description is required");
            return;
        }
        console.log({ "title": title, "description": description });
    }

    return (
        <>
            <form onSubmit={submitHandler} className=' w-11/12 bg-gray-400 rounded-md mt-5 flex p-5 flex-col  items-center' >
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='p-3  outline-none mb-2 w-full font-semibold text-gray-700 rounded-sm my-auto  border shadow-stone-900'
                    type="text" placeholder='Enter your title' />
                <textarea

                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={10}
                    className='p-3 outline-none   mb-2 w-full font-semibold text-gray-700 rounded-sm my-auto  border shadow-stone-900'
                    placeholder='Enter your description' />
                <button
                    className='bg-gray-700 hover:bg-gray-800 text-white p-4 rounded-lg w-full font-bold text-lg'
                    type={'submit'}>
                    Add
                </button>
            </form>
        </>
    )
}

export default AddArticleForm