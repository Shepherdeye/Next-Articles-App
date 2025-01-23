import { getSingleArticle } from "@/apiCalls/ArticleApiCalls";
import AddCommentForm from "@/Components/Comments/AddCommentForm";
import CommentItem from "@/Components/Comments/CommentItem";
import { SingleArticle } from "@/utils/types";
import { verifyTokenForPages } from "@/utils/verfyJwt";
import { cookies } from "next/headers";



interface SinglePageParam {
    params: { id: string };

}
const SingleArticlePage = async ({ params }: SinglePageParam) => {

    const token = (await cookies()).get("jwtToken")?.value || "";
    const user = verifyTokenForPages(token);

    const article: SingleArticle = await getSingleArticle(params.id);

    return (
        <section className=" fix-height container m-auto w-full px-5 pt-8  md:w-3/4 ">
            <div className="bg-white p-7 rounded-lg  ">

                <h1 className="text-3xl font-bold text-gray-700 mb-2">{article.title}</h1>
                <div className="text-gray-600 text-sm">
                    {new Date(article.createdAt).toDateString()}
                </div>
                <p className="text-gray-800 text-xl mt-5">{article.description}</p>

            </div>

            {
                user ? <AddCommentForm articleId={parseInt(params.id)} /> : <>  <div className="my-4 text-center">
                    <span className="text-gray-600 font-semibold text-sm hover:text-blue-500 cursor-pointer">
                        Sign in to add comments
                    </span>
                </div></>
            }


            <div className="my-5">
                <h4 className="font-bold ">Comments</h4>
            </div>

            {
                article.comments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} userId={user?.id} />
                ))
            }


        </section>
    )
}

export default SingleArticlePage