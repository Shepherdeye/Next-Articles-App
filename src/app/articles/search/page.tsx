import { searchForArticle } from "@/apiCalls/ArticleApiCalls"
import { Article } from "@prisma/client"
import ArticleItem from "../ArticleItem";

interface SearchArticlePageProps {
    searchParams: { searchText: string }
}

const SearchArticlePage = async ({ searchParams: { searchText } }: SearchArticlePageProps) => {
    const articles: Article[] = await searchForArticle(searchText);
    return (
        <div className="fix-height flex flex-col items-center">
            <h3 className="p-5 font-bold text-2xl text-center"> You Are Searching For
                <span className="mx-2 text-2xl text-green-700
             font-bold hover:text-green-800 ">{searchText}...</span>
            </h3>
            <div className="container flex flex-wrap gap-3 items-center justify-center py-5">
                {
                    articles.map((article) =>
                        <ArticleItem key={article.id} article={article} />
                    )
                }
            </div>
        </div>
    )
}

export default SearchArticlePage