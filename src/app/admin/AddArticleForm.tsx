"use client"
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { toast } from "react-toastify";



const AddArticleForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title === "") {
            toast.error("title is required");
            return;
        } else if (description == "") {
            toast.error("description is required");
            return;
        }
        try {
            setLoading(true);
            await axios.post(`${DOMAIN}/api/articles`, { title, description });
            setTitle("");
            setDescription("");
            router.refresh();
            toast.success("Article added successfully");
            setLoading(false)

        } catch (error: any) {
            toast.error(error?.response?.data.message);
            setLoading(false)
        }
    }

    return (
        <>
            <form onSubmit={submitHandler} className='w-11/12 bg-gray-400 rounded-md mt-5 flex p-5 flex-col  items-center' >
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
                    disabled={loading}
                    className='bg-gray-700 hover:bg-gray-800 text-white p-4 rounded-lg w-full font-bold text-lg'
                    type={'submit'}>
                    {loading ? "Loading..." : "Add Article"}
                </button>
            </form>
        </>
    )
}

export default AddArticleForm