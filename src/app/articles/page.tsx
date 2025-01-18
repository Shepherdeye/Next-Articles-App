
import SearchInputComponent from '@/Components/Articles/SearchInputComponent';
import ArticleItem from './ArticleItem';
import Pagination from '@/Components/Articles/Pagination';
import { getArticles } from '@/apiCalls/ArticleApiCalls';

interface PageNumberProps {
    searchParams: { pageNumber: string }
}




const Articles = async ({ searchParams }: PageNumberProps) => {
    const { pageNumber } = searchParams;

    const articlesData = await getArticles(pageNumber);
    return (
        <section className='fix-height container m-auto px-5 '>
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