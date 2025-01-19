import { searchForArticle } from "@/apiCalls/ArticleApiCalls"
import { Article } from "@prisma/client"

interface SearchArticlePageProps {
    searchParams: { searchText: string }
}

const SearchArticlePage = async ({ searchParams: { searchText } }: SearchArticlePageProps) => {
    const article: Article[] = await searchForArticle(searchText);
    return (
        <div className="fix-height">
            <h3 className="p-2"> You Are Searching For <span className="mx-1 text-xl text-green-700 font-semibold hover:text-green-800 ">{searchText}</span></h3>

        </div>
    )
}

export default SearchArticlePage