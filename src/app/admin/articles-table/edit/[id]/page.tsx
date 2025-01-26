import { getSingleArticle } from "@/apiCalls/ArticleApiCalls"
import { Article } from "@prisma/client"
import EditArticleForm from "./EditArticleForm";

interface EditArticlePageProps {
    params: Promise<{ id: string }>;
}

const EditArticlePage = async ({ params }: EditArticlePageProps) => {

    const articleId = (await params).id;

    const article: Article = await getSingleArticle(articleId);


    return (
        <section className="flex w-full justify-center items-center">
            <div className="w-full flex  flex-col items-center justify-start ">
                <div className="w-11/12 flex justify-start items-center">
                    <h2 className="px-3 text-left underline text-lg  md:text-2xl text-gray-900 font-bold ">Edit Article Page</h2>
                </div>
                <EditArticleForm article={article} />

            </div>

        </section>
    )
}

export default EditArticlePage