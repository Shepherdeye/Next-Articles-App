import Link from "next/link"

import { CgMenuGridR } from 'react-icons/cg';
import { MdOutlineArticle } from 'react-icons/md';
import { FaRegComments } from 'react-icons/fa';

const AdminSlidebar = () => {
    return (
        <div className="flex flex-col items-start ">
            <div>
                <Link className="text-3xl font-bold p-2 flex items-center" href={"/admin"}>
                    <CgMenuGridR />
                    <span className="hidden lg:block">
                        Dashboard
                    </span>

                </Link>
            </div>
            <ul className="py-2 px-4 flex flex-col justify-around items-start h-1/2" >
                <Link className="flex items-center  text-xl mt-3 lg:border-b"
                    href={"/admin/articles-table?pageNumber=1"}>
                    <MdOutlineArticle />
                    <span className="hidden lg:block ml-2 text-lg">
                        Articles Table
                    </span>
                </Link>


                <Link className="flex items-center  text-xl mt-3 lg:border-b "
                    href={"/admin/comments-table"}>
                    <FaRegComments />

                    <span className="hidden lg:block ml-2 text-lg ">
                        Comments Table
                    </span>

                </Link>

            </ul>
        </div>
    )
}

export default AdminSlidebar