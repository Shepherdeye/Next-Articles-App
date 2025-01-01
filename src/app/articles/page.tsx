
import ArticleItem from './ArticleItem';
import { Article } from "@/utils/types"

const Articles = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const articlesData: Article[] = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch articles')
    }
    return (
        <section className='flex justify-center align-center'>
            <div className="pt-5  w-full gap-7 flex flex-wrap justify-center">
                {
                    articlesData.map((item) => {
                        return (
                            <ArticleItem key={item.id} article={item} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Articles