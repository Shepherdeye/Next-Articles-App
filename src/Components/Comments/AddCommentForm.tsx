"use client"
import { useState } from "react"
import { toast } from "react-toastify";



const AddCommentForm = () => {

    const [comment, setComment] = useState("");

    const submitHandler = (e: any) => {
        e.preventDefault();
        if (comment === "") {
            toast.error("Please type some thing");
            return;
        }
        console.log({ "comment": comment });
    }

    return (
        <>
            <form onSubmit={submitHandler} className=' w-full  flex mt-5 flex-col  items-start mb-8 rounded-lg' >
                <input

                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className='p-3  outline-none mb-2 w-full font-semibold text-gray-700 rounded-sm my-auto  border shadow-stone-900'
                    type="text" placeholder='Enter your comment' />

                <button
                    className='bg-green-700 hover:bg-gray-800 text-white p-2 rounded-lg font-bold text-lg'
                    type={'submit'}>
                    comment
                </button>
            </form>
        </>
    )
}

export default AddCommentForm