
import { getArticles } from "@/apiCalls/ArticleApiCalls";
import { verifyTokenForPages } from "@/utils/verfyJwt";
import { Article } from "@prisma/client";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteArticleButon from "./DeleteArticleButon";
import { VscGoToFile } from "react-icons/vsc";

import Pagination from "@/Components/Articles/Pagination";
import { ARTICLE_PER_PAGE } from "@/utils/constants";
import { RiEditBoxLine } from "react-icons/ri";
import prisma from "@/utils/db";

interface ArticleTableProps {
    searchParams: Promise<{ pageNumber: string }>
}

const AdminArticleTable = async ({ searchParams }: ArticleTableProps) => {
    const pageNumber = (await searchParams).pageNumber;
    const token = (await cookies()).get("jwtToken")?.value || "";
    const user = verifyTokenForPages(token);
    if (!user) redirect("/");
    if (user.isAdmin === false) redirect("/");

    const articles: Article[] = await getArticles(pageNumber);

    const pagescount = await prisma.article.count();
    const pages = Math.ceil(pagescount / ARTICLE_PER_PAGE);





    return (

        <section className="flex flex-col w-full max-w-screen-xl mx-3 bg-gray-100 overflow-hidden">
            <div className="flex-1 bg-white shadow-md rounded-xl" >
                <h3 className="text-lg font-semibold text-gray-800 px-4 py-4 border-b">
                    Articles
                </h3>
                <div className="overflow-x-hidden max-h-[400px] overflow-y-auto p-3 ">
                    <table className="w-full  text-xs lg:text-[18px]  text-gray-700 text-center">
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
                                <tr key={article.id} className="border-b hover:bg-gray-50 md:h-[55px]">
                                    <td className="px-1 py-2 font-medium text-gray-900">{article.id}</td>
                                    <td className="px-1 py-2 font-medium text-gray-900">{article.title}</td>
                                    <td className="px-1 py-2">{new Date(article.updatedAt).toLocaleString()}</td>
                                    <td className="px-1 py-2 ">
                                        <Link href={`/articles/${article.id}`} className="text-blue-500 hover:underline flex justify-center">
                                            <VscGoToFile size={20} />
                                        </Link>
                                    </td>
                                    <td className="px-1 py-2">
                                        <div className="flex items-center justify-center">
                                            <button className="text-yellow-500 hover:text-yellow-700">
                                                <Link href={`/admin/articles-table/edit/${article.id}`}>

                                                    <RiEditBoxLine size={20} />

                                                </Link>
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