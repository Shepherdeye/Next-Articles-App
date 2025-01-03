
const paginationArray = [1, 2, 3, 4, 5];
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const Pagination = () => {
    return (
        <div className="flex items-center justify-center mt-2 mb-8">
            <div className="text-gray-900 m-1 py-1 px-3 font-bold text-3xl cursor-pointer hover:bg-gray-200 transition">
                <BsArrowLeftSquareFill />
            </div>

            {paginationArray.map((page) => {

                return <div className="border border-gray-900 text-gray-900 py-1 px-4 font-bold text-xl cursor-pointer hover:bg-gray-200 transition" key={page}>
                    {page}
                </div>
            })}
            <div className=" text-gray-900 m-2 py-1 px- font-bold text-3xl cursor-pointer hover:bg-gray-200 transition">
                <BsArrowRightSquareFill />
            </div>
        </div>
    )
}

export default Pagination