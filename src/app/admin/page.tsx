import AddArticleForm from "./AddArticleForm"
import { cookies } from "next/headers"
import { verifyTokenForPages } from "@/utils/verfyJwt"
import { redirect } from "next/navigation"

const AdminPage = async () => {
    const token = (await cookies()).get("jwtToken")?.value || "";
    const user = verifyTokenForPages(token);
    if (!user) redirect("/");
    if (user.isAdmin === false) redirect("/");

    return (

        <div className=" w-full flex flex-col justify-center items-center ">
            <div className="w-11/12 flex justify-start items-center">
                <h2 className=" pl-4 font-bold text-lg md:text-2xl underline">Add New Article</h2>
            </div>
            <AddArticleForm />
        </div>

    )
}

export default AdminPage