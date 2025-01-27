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
            <form
                onSubmit={submitHandler}
                className="w-11/12 bg-white rounded-xl shadow-lg mt-10 p-6 flex flex-col items-center space-y-4"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Add Your Article
                </h2>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-3 w-full outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition-all text-gray-700"
                    type="text"
                    placeholder="Enter your title"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={6}
                    className="p-3 w-full outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition-all text-gray-700 resize-none"
                    placeholder="Enter your description"
                />
                <button
                    disabled={loading}
                    className={`${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                        } text-white font-semibold py-3 px-6 rounded-lg w-full transition-all text-lg`}
                    type="submit"
                >
                    {loading ? "Loading..." : "Add Article"}
                </button>
            </form>
        </>

    )
}

export default AddArticleForm