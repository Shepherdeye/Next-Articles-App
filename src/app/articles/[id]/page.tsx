
import { Article } from "@/utils/types";


interface SinglePageParam {
    params: { id: string };
}
const SingleArticlePage = async ({ params }: SinglePageParam) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const article: Article = await response.json();
    if (!response.ok) {
        throw new Error("Faild to fetch this Article")
    }

    return (
        <section className=" fix-height container m-auto w-full px-5 pt-8  md:w-3/4">
            <div className="bg-white p-7 rounded-lg ">

                <h1 className="text-3xl font-bold text-gray-700 mb-2">{article.title}</h1>
                <div className="text-gray-400">28/12/2024</div>
                <p className="text-gray-800 text-xl mt-5">{article.body}</p>

            </div>
        </section>
    )
}

export default SingleArticlePage