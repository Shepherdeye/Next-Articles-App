
import { getArticles, getArticlesCount } from "@/apiCalls/ArticleApiCalls";
import { verifyTokenForPages } from "@/utils/verfyJwt";
import { Article } from "@prisma/client";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteArticleButon from "./DeleteArticleButon";
import Pagination from "@/Components/Articles/Pagination";
import { ARTICLE_PER_PAGE } from "@/utils/constants";

interface ArticleTableProps {
    searchParams: { pageNumber: string }
}

const AdminArticleTable = async ({ searchParams: { pageNumber } }: ArticleTableProps) => {
    const token = (await cookies()).get("jwtToken")?.value || "";
    const user = verifyTokenForPages(token);
    if (!user) redirect("/");
    if (user.isAdmin === false) redirect("/");

    const articles: Article[] = await getArticles(pageNumber);

    const pagescount = await getArticlesCount()
    const pages = Math.ceil(pagescount / ARTICLE_PER_PAGE);





    return (

        <section className="flex flex-col w-full max-w-screen-xl mx-3 bg-gray-100 overflow-hidden">
            <div className="flex-1 bg-white shadow-md rounded-xl" >
                <h3 className="text-lg font-semibold text-gray-800 px-4 py-4 border-b">
                    Articles
                </h3>
                <div className="overflow-x-hidden max-h-[400px] overflow-y-auto p-3">
                    <table className="w-full  text-xs lg:text-[18px] text-left text-gray-700">
                        <thead className="bg-gray-200 text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-2 py-2">ID</th>
                                <th scope="col" className="px-2 py-2">Title</th>
                                <th scope="col" className="px-2 py-2">Created At</th>
                                <th scope="col" className="px-2 py-2">More Info</th>
                                <th scope="col" className="px-2 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article) => (
                                <tr key={article.id} className="border-b hover:bg-gray-50">
                                    <td className="px-1 py-2 font-medium text-gray-900">{article.id}</td>
                                    <td className="px-1 py-2 font-medium text-gray-900">{article.title}</td>
                                    <td className="px-1 py-2">{new Date(article.updatedAt).toLocaleString()}</td>
                                    <td className="px-1 py-2">
                                        <Link href={`/articles/${article.id}`} className="text-blue-500 hover:underline">
                                            Read More
                                        </Link>
                                    </td>
                                    <td className="px-1 py-2">
                                        <div className="flex flex-col space-y-2 md:flex-row md:items-end md:space-x-2">
                                            <button className=" p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                                                <Link href={"/admin"}>Edit</Link>
                                            </button>
                                            <DeleteArticleButon articleId={article.id} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination pages={pages} pageNumber={parseInt(pageNumber)} path="/admin/articles-table" />
        </section>

    )
}

export default AdminArticleTable