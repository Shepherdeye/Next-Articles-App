import Link from 'next/link'
import { Article } from "@prisma/client"

interface ArticleItemProps {
    article: Article
}


const ArticleItem = ({ article }: ArticleItemProps) => {
    return (
        <div className="p-5 rounded-lg my-1 shadow-sm shadow-gray-800 hover:bg-slate-200 w-full md:w-2/5 lg:w-1/4">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{article.title}</h3>
            <p className="my-2 text-xl text-gray-700 p-1 line-clamp-1">{article.description}</p>
            <Link className="text-xl bg-purple-700 text-white hover:bg-purple-800 w-full block p-1 rounded-md text-center" href={`/articles/${article.id}`}>see more</Link>
        </div>
    )
}

export default ArticleItem