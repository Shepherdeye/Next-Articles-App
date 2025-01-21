import { RiEditBoxLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";

import adminImg from "../../../public/facebook-verified.png"
import Image from 'next/image';
const CommentItem = () => {
    return (
        <div className="  shadow-lg flex flex-col w-full bg-white rounded-lg border border-gray-800 mb-6 p-4">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                    Elsayed Mamdouh
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
            </div>

            {/* Content Section */}
            <p
                style={{ direction: "rtl" }}
                className="text-sm text-gray-700 leading-relaxed   "
            >
                يبدو أن هذا المقال يحتوي على عدد كبير من المعلومات التي بدورها ستكون مهمة
                في تعلم هذا المجال. شكراً لكم.              يبدو أن هذا المقال يحتوي على عدد كبير من المعلومات التي بدورها ستكون مهمة
                في تعلم هذا المجال. شكراً لكم.              يبدو أن هذا المقال يحتوي على عدد كبير من المعلومات التي بدورها ستكون مهمة
                في تعلم هذا المجال. شكراً لكم.              يبدو أن هذا المقال يحتوي على عدد كبير من المعلومات التي بدورها ستكون مهمة
                في تعلم هذا المجال. شكراً لكم.
            </p>

            {/* Footer Section */}
            <div className="flex items-center justify-between mt-1">
                {/* Date */}
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    2/1/2025
                </span>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
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