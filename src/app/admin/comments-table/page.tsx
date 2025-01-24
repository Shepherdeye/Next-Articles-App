import { verifyTokenForPages } from "@/utils/verfyJwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AdminCommentsTable = async () => {
    const token = (await cookies()).get("jwtToken")?.value || "";
    const user = verifyTokenForPages(token);
    if (!user) redirect("/");
    if (user.isAdmin === false) redirect("/");
    return (
        <div>AdminCommentsTable</div>
    )
}

export default AdminCommentsTable