import { Dispatch, SetStateAction, useState } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { DOMAIN } from '@/utils/constants';

interface updateCommentProps {
    setOpen: Dispatch<SetStateAction<boolean>>;
    text: string;
    commentId: number;
}


const CommentUpdateItem = ({ setOpen, text, commentId }: updateCommentProps) => {

    const [updatedText, setUpdatedText] = useState(text);
    const router = useRouter()


    const closeHandler = () => {
        return setOpen(false);
    }


    const updateCommentHandeler = async (e: React.FormEvent) => {
        e.preventDefault();

        if (updatedText === "") return toast.info("You Should Add Text");

        try {
            await axios.put(`${DOMAIN}/api/comments/${commentId}`, { text: updatedText });
            setOpen(false);
            router.refresh();
        } catch (error: any) {
            toast.error(error?.response?.data.message)
        }
    }

    return (


        <div className='fixed top-0 left-0 bottom-0 right-0 z-10 bg-black bg-opacity-40 flex items-center justify-center'>
            <div className='w-11/12 lg:w-2/4 bg-white rounded-lg p-3'>
                <div className='flex justify-end items-start mb-5'>
                    <IoMdCloseCircleOutline onClick={closeHandler} />
                </div>
                <form onSubmit={updateCommentHandeler}>
                    <input
                        type="text"
                        placeholder='Edit Comment...'
                        className='text-xl rounded-lg p-2 w-full bg-white mb-2'
                        value={updatedText}
                        onChange={(e) => setUpdatedText(e.target.value)}
                    />
                    <button type="submit" className='bg-green-700 w-full text-white mt-2 p-1 text-xl rounded-lg hover:bg-green-900 transition'>
                        Edit
                    </button>
                </form>
            </div>
        </div>


    )
}

export default CommentUpdateItem