
const paginationArray = [1, 2, 3, 4, 5];

const Pagination = () => {
    return (
        <div className="flex items-center justify-center cursor-pointer mb-7">
            <div className=" font-semibold text-gray-900 bg-slate-600 px-2 border-gray-800  border">
                Prev
            </div>

            {paginationArray.map((page) => {

                return <div className=" font-semibold m-2 text-gray-900 bg-slate-600 px-2 border-gray-800  border " key={page}>
                    {page}
                </div>
            })}
            <div className=" font-semibold text-gray-900 bg-slate-600 px-2 border-gray-800  border ">
                next
            </div>
        </div>
    )
}

export default Pagination