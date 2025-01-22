import { RiEditBoxLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import adminImg from "../../../public/facebook-verified.png"
import Image from 'next/image';
import { CommentWithUSer } from "@/utils/types";

interface CommentForArticle {
    comment: CommentWithUSer;
}



const CommentItem = ({ comment }: CommentForArticle) => {
    return (
        <div className="  shadow-lg flex flex-col w-full bg-white rounded-lg border border-gray-800 mb-6 p-4">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                    {comment.user.name}


                    <span className="ml-2 text-sm text-blue-600 flex items-center underline">
                        WS Admin
                        <Image
                            src={adminImg}
                            width={18}
                            height={18}
                            alt="Admin Profile"
                            className="ml-1"
                        />
                    </span>


                </h2>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {new Date(comment.createdAt).toDateString()}
                </span>
            </div>

            {/* Content Section */}
            <p
                style={{ direction: "rtl", textAlign: "left" }}
                className="text-sm text-gray-700 leading-relaxed "
            >
                {comment.text}
            </p>

            {/* Footer Section */}
            <div className="flex items-center justify-end mt-1">
                {/* Date */}

                {/* Action Buttons */}
                <div style={{ justifyContent: "end" }} className="flex justify-end space-x-2 w-full">
                    <button
                        className="p-1 text-black hover:text-yellow-600 transition-colors"
                        title="Edit"
                    >
                        <RiEditBoxLine size={16} />
                    </button>
                    <button
                        className="p-1 text-red-500 hover:text-red-600 transition-colors"
                        title="Delete"
                    >
                        <MdDeleteOutline size={18} />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CommentItem