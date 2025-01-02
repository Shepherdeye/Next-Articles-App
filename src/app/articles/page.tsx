
import SearchInputComponent from '@/Components/Articles/SearchInputComponent';
import ArticleItem from './ArticleItem';
import { Article } from "@/utils/types"
import Pagination from '@/Components/Articles/Pagination';

const Articles = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const articlesData: Article[] = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch articles')
    }
    return (
        <section className='flex flex-col justify-center align-center'>
            <SearchInputComponent />
            <div className="pt-5  w-full gap-7 flex flex-wrap justify-center mb-7">
                {
                    articlesData.slice(0, 6).map((item) => {
                        return (
                            <ArticleItem key={item.id} article={item} />
                        )
                    })
                }
            </div>
            <Pagination />
        </section>
    )
}

export default Articles