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
        <section className="flex w-full justify-center items-start">
            <div className="w-full flex  flex-col items-center justify-start ">

                <EditArticleForm article={article} />

            </div>

        </section>
    )
}

export default EditArticlePage