import { getSingleArticle } from "@/apiCalls/ArticleApiCalls";
import AddCommentForm from "@/Components/Comments/AddCommentForm";
import CommentItem from "@/Components/Comments/CommentItem";
import { SingleArticle } from "@/utils/types";
import { verifyTokenForPages } from "@/utils/verfyJwt";
import { cookies } from "next/headers";
import Link from 'next/link'




interface SinglePageParam {
    params: Promise<{ id: string }>

}
const SingleArticlePage = async ({ params }: SinglePageParam) => {

    const articleId = (await params).id;
    const token = (await cookies()).get("jwtToken")?.value || "";
    const user = verifyTokenForPages(token);

    const article: SingleArticle = await getSingleArticle(articleId);

    return (
        <section className=" fix-height container m-auto w-full px-5 pt-8  md:w-3/4 ">
            <div className="p-7 text-white rounded-lg bg-gray-800  ">

                <h1 className="text-3xl font-bold text-white mb-2">{article.title}</h1>
                <div className="text-white-600 text-sm">
                    {new Date(article.createdAt).toDateString()}
                </div>
                <p className="text-white-800 text-xl mt-5">{article.description}</p>

            </div>

            {
                user ? <AddCommentForm articleId={parseInt(articleId)} /> : <>  <div className="my-4 text-center">
                    <Link href={"/login"} className="text-gray-600 font-semibold text-sm hover:text-blue-500 cursor-pointer">
                        Sign in to add comments
                    </Link >
                </div></>
            }


            <div className="my-5">
                <h4 className="font-bold">Comments</h4>
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