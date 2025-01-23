"use client"


import { RiEditBoxLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { CommentWithUSer } from "@/utils/types";
import RelativeTime from "./HandleTime";
import CommentUpdateItem from "./CommentUpdateItem";
import { useState } from "react";

interface CommentForArticle {
    comment: CommentWithUSer;
    userId: number | undefined
}


const CommentItem = ({ comment, userId }: CommentForArticle) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="  flex flex-col w-full bg-white rounded-lg border-2 border-gray-700 mb-6 p-4">

            <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg font-semibold  text-gray-800 flex items-center ">
                    {comment.user.name}
                </h2>

            </div>


            <p
                style={{ direction: "rtl", textAlign: "left" }}
                className=" text-sm text-gray-800 leading-relaxed " >
                {comment.text}
            </p>


            <div className="flex items-center justify-end mt-1">

                <span style={{ width: "90%", opacity: ".6", fontSize: "9px" }} className=" px-2 py-1 rounded ">
                    <RelativeTime comment={comment} />
                </span>
                <div style={{ justifyContent: "end" }} className="flex justify-end space-x-2 w-full">

                    {userId && userId == comment.userId && (<>
                        <button
                            className="p-1 text-black hover:text-yellow-600 transition-colors"
                            title="Edit">
                            <RiEditBoxLine size={16} onClick={() => setOpen(true)} />
                        </button>
                        <button
                            className="p-1 text-red-500 hover:text-red-600 transition-colors"
                            title="Delete">
                            <MdDeleteOutline size={18} />
                        </button></>
                    )}
                </div>
            </div>

            {open && (<CommentUpdateItem setOpen={setOpen} text={comment.text} commentId={comment.id} />)}


        </div>

    )
}

export default CommentItem