"use client"
import { LiaCommentSolid } from "react-icons/lia";
import { useState } from "react"
import { toast } from "react-toastify";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { useRouter } from "next/navigation";
import ButtonSpinner from "../ButtonSpinner";

interface commentProps {
    articleId: number
}

const AddCommentForm = ({ articleId }: commentProps) => {
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("");
    const router = useRouter();

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (text === "") {
            toast.error("Please type some thing");
            return;
        }


        try {
            setLoading(true);
            await axios.post(`${DOMAIN}/api/comments`, { text, articleId });
            router.refresh()
            setText("");
            setLoading(false)

        } catch (error: any) {
            toast.warning(error.response.data.message)
        }
    }

    return (
        <>
            <form onSubmit={submitHandler} className=' w-full  flex mt-5 flex-col  items-start mb-8 rounded-lg' >
                <input

                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='p-3  outline-none mb-2 w-full font-semibold text-gray-700 rounded-sm my-auto  border shadow-stone-900'
                    type="text" placeholder='Enter your comment' />

                <button disabled={loading}
                    className='bg-green-700 hover:bg-gray-800 text-white p-2 rounded-lg font-bold text-lg'
                    type={'submit'}>
                    {loading ? <ButtonSpinner /> : <LiaCommentSolid />}
                </button>
            </form>
        </>
    )
}

export default AddCommentForm