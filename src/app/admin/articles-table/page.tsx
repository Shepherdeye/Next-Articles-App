
import { getArticles, getArticlesCount } from "@/apiCalls/ArticleApiCalls";
import { verifyTokenForPages } from "@/utils/verfyJwt";
import { Article } from "@prisma/client";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

interface ArticleTableProps {
    searchParams: { pageNumber: string }
}

const AdminArticleTable = async ({ searchParams: { pageNumber } }: ArticleTableProps) => {
    const token = (await cookies()).get("jwtToken")?.value || "";
    const user = verifyTokenForPages(token);
    if (!user) redirect("/");
    if (user.isAdmin === false) redirect("/");

    const articles: Article[] = await getArticles(pageNumber);




    return (

        <section className="w-full p-6 bg-gray-100">
            <div className="overflow-x-auto bg-white shadow-md rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 px-6 py-4 border-b">Articles</h3>
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
                        <tr>
                            <th scope="col" className="px-6 py-3">Title</th>
                            <th scope="col" className="px-6 py-3">Created At</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                            <th scope="col" className="px-6 py-3">More Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article) => (
                            <tr key={article.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{article.title}</td>
                                <td className="px-6 py-4">{new Date(article.updatedAt).toLocaleDateString()}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-2">
                                        <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                                            <Link href={"/admin"}>Edit</Link>
                                        </button>
                                        <button className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={`/articles/${article.id}`}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Read More
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default AdminArticleTable