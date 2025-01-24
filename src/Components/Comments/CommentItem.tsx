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
import { FaRegCircleUser } from "react-icons/fa6";

interface CommentForArticle {
    comment: CommentWithUSer;
    userId: number | undefined
}


const CommentItem = ({ comment, userId }: CommentForArticle) => {

    const [open, setOpen] = useState(false);
    const router = useRouter()

    const handleDeleteComment = async () => {
        try {
            if (confirm("Are You Want To Delete This Comment")) {
                await axios.delete(`${DOMAIN}/api/comments/${comment.id}`);
                router.refresh();
            }

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

            <div className="flex items-center justify-between mb-1 p-1 bg-gray-800 rounded-md text-white">
                <div className="flex justify-between items-center ">
                    <FaRegCircleUser size={30} />

                    <h2 className="text-md ml-2 font-semibold  text-white flex items-center ">


                        {comment.user.name}

                    </h2>
                </div>
                <span style={{ opacity: ".6", fontSize: "9px" }} className=" px-2 py-1 rounded ">
                    <RelativeTime comment={comment} />
                </span>
            </div>


            <p
                style={{ direction: "rtl", textAlign: "left" }}
                className="ml-2 my-2 text-sm text-gray-800 leading-relaxed " >
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