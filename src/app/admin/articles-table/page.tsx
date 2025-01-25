
import { getArticles, getArticlesCount } from "@/apiCalls/ArticleApiCalls";
import { verifyTokenForPages } from "@/utils/verfyJwt";
import { Article } from "@prisma/client";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteArticleButon from "./DeleteArticleButon";

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

        <section className="flex flex-col w-full max-w-screen-xl mx-auto p-3 bg-gray-100">
            <div className="overflow-x-auto bg-white shadow-md rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 px-4 py-4 border-b">Articles</h3>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] text-sm text-left text-gray-700">
                        <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
                            <tr>
                                <th scope="col" className="px-4 py-3">Title</th>
                                <th scope="col" className="px-4 py-3">Created At</th>
                                <th scope="col" className="px-4 py-3">Action</th>
                                <th scope="col" className="px-4 py-3">More Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article) => (
                                <tr key={article.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3 font-medium text-gray-900">{article.title}</td>
                                    <td className="px-4 py-3">{new Date(article.updatedAt).toDateString()}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center space-x-2">
                                            <button className="px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                                                <Link href={"/admin"}>Edit</Link>
                                            </button>
                                            <DeleteArticleButon articleId={article.id} />
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <Link
                                            href={`/articles/${article.id}`}
                                            className="text-blue-500 "
                                        >
                                            Read More
                                        </Link>
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

export default AdminArticleTable