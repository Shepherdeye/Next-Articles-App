import { FaEdit, FaTrash } from 'react-icons/fa';

const CommentItem = () => {
    return (
        <div className='flex flex-col w-full  bg-gray-200 rounded border border-stone-900 shadow-lg  mb-4 p-2'>

            <div className='flex w-full justify-between '>
                <strong className='text-gray-900 pl-1 text-1xl font-bold'>Elsayed Mamdouh</strong>
                <small style={{ fontSize: "12px" }} className='pr-1 p-1 rounded-lg text-sm text-green-200 '>2/1/2025</small>
            </div>
            <div className='pl-2 text-sm'>
                يبدوان هذا المقال  يحتوي  علي  عدد كبير ن المعلومات التي  بدورها  ستكون مهمه في  تعلم هذا المجال شكرا لكم

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
    )
}

export default CommentItem