import { FaEdit, FaTrash } from 'react-icons/fa';
import adminImg from "../../../public/facebook-verified.png"
import Image from 'next/image';
const CommentItem = () => {
    return (
        <div className='flex flex-col w-full  bg-gray-200 rounded border border-stone-900 shadow-lg  mb-4 p-2'>

            <div className='flex w-full justify-between '>
                <strong className=' flex text-gray-900 pl-1 text-1xl items-center font-bold'>Elsayed Mamdouh
                    <span className='flex items-center text-blue-600 text-sm underline ml-1'>WS Admin <Image src={adminImg} width={20} height={20} alt="image admin" /></span></strong>
            </div>
            <div className='pl-2 text-sm'>
                يبدوان هذا المقال  يحتوي  علي  عدد كبير ن المعلومات التي  بدورها  ستكون مهمه في  تعلم هذا المجال شكرا لكم
                يبدوان هذا المقال  يحتوي  علي  عدد كبير ن المعلومات التي  بدورها  ستكون مهمه في  تعلم هذا المجال شكرا لكم
                يبدوان هذا المقال  يحتوي  علي  عدد كبير ن المعلومات التي  بدورها  ستكون مهمه في  تعلم هذا المجال شكرا لكم

            </div>
            <div className='flex justify-between items-center mt-2 '>
                <div>
                    <small style={{ fontSize: "11px", opacity: ".5" }} className=' ml-1 rounded-sm text-sm font-semibold'>2/1/2025</small>

                </div>

                <div className='flex  items-center justify-end cursor-pointer'>
                    <div className='p-1 text-yellow-500 '>
                        <FaEdit />
                    </div>
                    <div className='p-1 text-red-500 '>
                        <FaTrash />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentItem