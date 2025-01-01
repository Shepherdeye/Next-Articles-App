import AddArticleForm from "./AddArticleForm"


const AdminPage = () => {
    // throw new Error("AdminPageError")
    return (

        <div className=" w-full">
            <h3 className=" pl-4 font-semibold text-3xl">Add New Article</h3>
            <AddArticleForm />
        </div>
    )
}

export default AdminPage