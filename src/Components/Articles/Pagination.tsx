
import Link from "next/link";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowLeftSquareFill } from "react-icons/bs";

interface PaginationProps {
    pages: number;
    pageNumber: number;
    path: string
}

const Pagination = ({ pages, pageNumber, path }: PaginationProps) => {
    const paginationArray: number[] = [];
    // make an  array from the pages
    for (let i = 1; i <= pages; i++) paginationArray.push(i);

    const next = pageNumber + 1;
    const prev = pageNumber - 1


    return (
        <div className="flex items-center justify-center mt-2 mb-8">
            {
                pageNumber !== 1 && (<Link href={`${path}?pageNumber=${prev}`} className="text-gray-900 m-1 py-1 px-3 font-bold text-3xl cursor-pointer hover:bg-gray-200 transition">
                    <BsArrowLeftSquareFill />
                </Link>)
            }

            {paginationArray.map((page) => {

                return <Link href={`${path}?pageNumber=${page}`} className={` ${pageNumber == page ? "bg-purple-700 text-white" : ""} border border-gray-900 text-gray-900 py-1 px-4 font-bold text-xl cursor-pointer hover:bg-purple-700 transition`} key={page}>
                    {page}
                </Link>
            })}
            {
                pageNumber !== pages && (
                    <Link href={`${path}?pageNumber=${next}`} className=" text-gray-900 m-2 py-1 px- font-bold text-3xl cursor-pointer hover:bg-gray-200 transition">
                        <BsArrowRightSquareFill />
                    </Link>
                )
            }
        </div>
    )
}

export default Pagination