import { getAllComments } from "@/apiCalls/AdminApiCalls";
import { verifyTokenForPages } from "@/utils/verfyJwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DeleteCommentButon from "./DeleteCommentButton";

const AdminCommentsTable = async () => {

    const token = (await cookies()).get("jwtToken")?.value || "";
    const user = verifyTokenForPages(token);
    if (!user) redirect("/");
    // admin  protect
    if (user.isAdmin === false) redirect("/");

    const comments = await getAllComments(token);


    return (
        <section className="flex flex-col w-full max-w-screen-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="bg-white shadow rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 px-6 py-4 border-b">
                    Comments
                </h3>
                <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
                    <table className="w-full text-sm lg:text-base text-gray-700">
                        <thead className="bg-gray-200 text-gray-600 uppercase font-semibold">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-left">Text</th>
                                <th scope="col" className="px-6 py-4 text-left">Created At</th>
                                <th scope="col" className="px-6 py-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {comments.map((comment) => (
                                <tr key={comment.id} className="hover:bg-gray-100">
                                    <td className="px-6 py-4 font-medium text-gray-900">
                                        {comment.text.split(' ').slice(0, 10).join(' ') +
                                            (comment.text.split(' ').length > 4 ? '...' : '')}
                                    </td>
                                    <td className="px-6 py-4">
                                        {comment.updatedAt ? new Date(comment.updatedAt).toLocaleString() : "invalid Date"}
                                    </td>
                                    <td className="px-6 py-4 text-center">

                                        <DeleteCommentButon commentId={comment.id} />

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </section>

    )
}

export default AdminCommentsTable