
import SearchInputComponent from '@/Components/Articles/SearchInputComponent';
import ArticleItem from './ArticleItem';
import Pagination from '@/Components/Articles/Pagination';
import { getArticles } from '@/apiCalls/ArticleApiCalls';
import { ARTICLE_PER_PAGE } from '@/utils/constants';
import { Article } from "@prisma/client"
import prisma from '@/utils/db';

interface PageNumberProps {
    searchParams: Promise<{ pageNumber: string }>;
}




const Articles = async ({ searchParams }: PageNumberProps) => {
    const pageNumber = (await searchParams).pageNumber;
    // use function  from the apicalls folder
    const articlesData: Article[] = await getArticles(pageNumber);

    // get the Article count
    const articlesCount = await prisma.article.count()
    // get the Page count // this  ARTICLE_PER_PAGE is  a  var from other page 
    const pagesCount = Math.ceil(articlesCount / ARTICLE_PER_PAGE);

    return (
        <section className='fix-height container m-auto px-5 '>
            <SearchInputComponent />
            <div className="pt-5  w-full gap-7 flex flex-wrap justify-center mb-7">
                {
                    articlesData.map((item) => {
                        return (
                            <ArticleItem key={item.id} article={item} />
                        )
                    })
                }
            </div>
            <Pagination pages={pagesCount} pageNumber={parseInt(pageNumber)} path="articles/" />
        </section>
    )
}

export default Articles 