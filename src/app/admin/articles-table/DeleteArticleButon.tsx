
"use client"

import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface DeleteArticleProps {
    articleId: number;
}



const DeleteArticleButon = ({ articleId }: DeleteArticleProps) => {
    const router = useRouter();

    const deleteHanddler = async () => {
        try {
            if (confirm("are you sure that you want to delete this article ")) {
                await axios.delete(`${DOMAIN}/api/articles/${articleId}`);
                router.refresh();
                toast.success("ArticleDeleted")

            }
        } catch (error: any) {
            toast.error(error?.response?.data.message)
        }
    }

    return (
        <button onClick={deleteHanddler} className="px-3 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">
            Delete
        </button>
    )
}

export default DeleteArticleButon