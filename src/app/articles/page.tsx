
import SearchInputComponent from '@/Components/Articles/SearchInputComponent';
import ArticleItem from './ArticleItem';
import { Article } from "@prisma/client"
import Pagination from '@/Components/Articles/Pagination';

interface PageNumberProps {
    searchParams: { pageNumber: string }
}


const Articles = async ({ searchParams }: PageNumberProps) => {
    const { pageNumber } = searchParams;
    const response = await fetch(`http://localhost:3000/api/articles?pageNumber=${pageNumber}`);
    const articlesData: Article[] = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch articles')
    }
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