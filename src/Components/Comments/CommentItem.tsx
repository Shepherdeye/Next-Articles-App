import { RiEditBoxLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import adminImg from "../../../public/facebook-verified.png"
import Image from 'next/image';
import { CommentWithUSer } from "@/utils/types";
import RelativeTime from "./HandleTime";
import { cookies } from "next/headers";
import { verifyTokenForPages } from "@/utils/verfyJwt";

interface CommentForArticle {
    comment: CommentWithUSer;
}




const CommentItem = async ({ comment }: CommentForArticle) => {
    const token = (await cookies()).get("jwtToken")?.value || "";
    const user = verifyTokenForPages(token);

    return (
        <div className="  flex flex-col w-full bg-white rounded-lg border-2 border-gray-700 mb-6 p-4">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg font-semibold  text-gray-800 flex items-center ">
                    {comment.user.name}

                </h2>

            </div>

            {/* Content Section */}
            <p
                style={{ direction: "rtl", textAlign: "left" }}
                className=" text-sm text-gray-800 leading-relaxed " >
                {comment.text}
            </p>

            {/* Footer Section */}
            <div className="flex items-center justify-end mt-1">
                {/* Date */}
                <span style={{ width: "90%", opacity: ".6", fontSize: "9px" }} className=" px-2 py-1 rounded ">
                    <RelativeTime comment={comment} />
                </span>
                {/* Action Buttons */}
                <div style={{ justifyContent: "end" }} className="flex justify-end space-x-2 w-full">
                    <button
                        className="p-1 text-black hover:text-yellow-600 transition-colors"
                        title="Edit">
                        <RiEditBoxLine size={16} />
                    </button>
                    <button
                        className="p-1 text-red-500 hover:text-red-600 transition-colors"
                        title="Delete">
                        <MdDeleteOutline size={18} />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CommentItem