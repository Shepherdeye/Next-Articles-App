"use client"
import { DOMAIN } from "@/utils/constants";
import { Article } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { toast } from "react-toastify";

interface EditArticleProps {
    article: Article
}


const EditArticleForm = ({ article }: EditArticleProps) => {

    const [title, setTitle] = useState(article.title);
    const [description, setDescription] = useState(article.description);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

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
            await axios.put(`${DOMAIN}/api/articles/${article.id}`, { title, description });
            router.refresh();
            toast.success("Article Edit successfully");
            setLoading(false);


        } catch (error: any) {
            toast.error(error?.response?.data.message)
        }
    }

    return (
        <>
            <form onSubmit={submitHandler} className='w-11/12 bg-gray-400 rounded-md mt-5 flex p-5 flex-col  items-center' >
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='p-3  outline-none mb-2 w-full font-semibold text-gray-700 rounded-sm my-auto  border shadow-stone-900'
                    type="text" />
                <textarea

                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={10}
                    className='p-3 outline-none   mb-2 w-full font-semibold text-gray-700 rounded-sm my-auto  border shadow-stone-900'
                />
                <button
                    disabled={loading}
                    className='bg-green-700 hover:bg-green-800 text-white p-4 rounded-lg w-full font-bold text-lg'
                    type={'submit'}>
                    {loading ? "Loading..." : "Edit Article"}
                </button>
            </form>
        </>
    )
}

export default EditArticleForm