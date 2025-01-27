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
            toast.error(error?.response?.data.message);
            setLoading(false);
        }
    }

    return (
        <>
            <form
                onSubmit={submitHandler}
                className="w-11/12 bg-white rounded-xl shadow-lg mt-10 p-6 flex flex-col space-y-4"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Edit Your Article
                </h2>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-3 w-full outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 transition-all text-gray-700"
                    type="text"
                    placeholder="Edit your title"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={6}
                    className="p-3 w-full outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 transition-all text-gray-700 resize-none"
                    placeholder="Edit your description"
                />
                <button
                    disabled={loading}
                    className={`${loading ? "bg-gray-400" : "bg-green-700 hover:bg-green-800"
                        } text-white font-semibold py-3 px-6 rounded-lg w-full transition-all text-lg`}
                    type="submit"
                >
                    {loading ? "Loading..." : "Edit Article"}
                </button>
            </form>
        </>

    )
}

export default EditArticleForm