"use client"


import { RiEditBoxLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { CommentWithUSer } from "@/utils/types";
import RelativeTime from "./HandleTime";
import CommentUpdateItem from "./CommentUpdateItem";
import { useState } from "react";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { useRouter } from "next/navigation";
interface CommentForArticle {
    comment: CommentWithUSer;
    userId: number | undefined
}


const CommentItem = ({ comment, userId }: CommentForArticle) => {

    const [open, setOpen] = useState(false);
    const router = useRouter()

    const handleDeleteComment = async () => {
        try {
            await axios.delete(`${DOMAIN}/api/comments/${comment.id}`);
            router.refresh();

        }
        catch (error: any) {
            // toast.error(error?.response?.data.message)
            console.log(error?.response?.data.message)

        }
    }
    return (
        <div style={{
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 3px, rgba(0, 0, 0, 0.23) 0px 1px 3px"
        }}
            className="  flex flex-col w-full bg-white rounded-lg mb-4 p-3">

            <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg font-semibold  text-gray-800 flex items-center ">
                    {comment.user.name}
                </h2>
                <span style={{ opacity: ".6", fontSize: "9px" }} className=" px-2 py-1 rounded ">
                    <RelativeTime comment={comment} />
                </span>
            </div>


            <p
                style={{ direction: "rtl", textAlign: "left" }}
                className=" text-sm text-gray-800 leading-relaxed " >
                {comment.text}
            </p>


            <div className="flex items-center justify-end mt-1">


                <div style={{ justifyContent: "end" }} className="flex justify-end space-x-2 w-full">

                    {userId && userId === comment.userId && (
                        <>
                            <button
                                className="p-1 text-black hover:text-yellow-600 transition-colors"
                                title="Edit">
                                <RiEditBoxLine size={16} onClick={() => setOpen(true)} />
                            </button>
                            <button
                                className="p-1 text-red-500 hover:text-red-600 transition-colors"
                                title="Delete">
                                <MdDeleteOutline size={18} onClick={handleDeleteComment} />
                            </button>
                        </>
                    )}
                </div>
            </div>

            {open && (<CommentUpdateItem
                setOpen={setOpen}
                text={comment.text}
                commentId={comment.id} />)}


        </div>

    )
}

export default CommentItem