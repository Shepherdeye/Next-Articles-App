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

        <div className="w-full flex flex-col justify-start items-center">
            <AddArticleForm />
        </div>


    )
}

export default AdminPage