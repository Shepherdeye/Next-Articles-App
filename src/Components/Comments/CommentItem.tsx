import { RiEditBoxLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import adminImg from "../../../public/facebook-verified.png"
import Image from 'next/image';
import { CommentWithUSer } from "@/utils/types";
import RelativeTime from "./HandleTime";

interface CommentForArticle {
    comment: CommentWithUSer;
}



const CommentItem = ({ comment }: CommentForArticle) => {
    return (
        <div className="  shadow-sm flex flex-col w-full bg-white rounded-lg  border-gray-700 mb-6 p-4">
            {/* Header Section */}
            <div className="w-full flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold  text-gray-800 flex items-center underline">
                    {comment.user.name}


                    <span className="text-sm text-blue-600 flex items-center ">

                        <Image
                            src={adminImg}
                            width={18}
                            height={18}
                            alt="Admin Profile"
                            className="ml-1"
                        />
                    </span>


                </h2>
                <div>
                    <span style={{ width: "60%" }} className="text-xs px-2 py-1 rounded">
                        <RelativeTime comment={comment} />
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <p
                style={{ direction: "rtl", textAlign: "left" }}
                className=" text-sm text-gray-800 leading-relaxed "
            >
                {comment.text}
            </p>

            {/* Footer Section */}
            <div className="flex items-center justify-end mt-3">
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