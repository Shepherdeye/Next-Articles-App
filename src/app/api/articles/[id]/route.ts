import { UpdateArticleDto } from "@/utils/dtos";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verfyJwt";


interface SingleArticleProps {
    params: { id: string }
}


/**
 * 
 * @method GET 
 * @route ~/api/articles/:id
 * @desc Get SingleArticle
 * @access Public
 */

export const GET = async (request: NextRequest, { params }: SingleArticleProps) => {

    try {
        const article = await prisma.article.findUnique({
            where: { id: parseInt(params.id) },
            include: {
                comments: {
                    include: {
                        user: {
                            select: {
                                name: true
                            }
                        }
                    },
                    orderBy: {
                        createdAt: "asc"
                    }
                }
            }
        })
        if (!article) {
            return NextResponse.json({ message: "Article Not Found" }, { status: 404 })
        }
        return NextResponse.json(article, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error From  server" }, { status: 500 })
    }

}


/**
 * 
 * @method PUT 
 * @route ~/api/articles/:id
 * @desc Update SingleArticle
 * @access Public
 */

export const PUT = async (request: NextRequest, { params }: SingleArticleProps) => {

    try {

        // verfy first to know if the user was admin or not
        const user = verifyToken(request);
        if (user == null || !user.isAdmin) {
            return NextResponse.json(
                { message: "only admin can update article,forbidden" },
                { status: 403 }
            )
        }
        const article = await prisma.article.findUnique({ where: { id: parseInt(params.id) } });

        if (!article) {
            return NextResponse.json({ message: "Article Not Found" }, { status: 404 })
        }

        const body = (await request.json()) as UpdateArticleDto;

        const updatedArticle = await prisma.article.update({
            where: { id: parseInt(params.id) },
            data: {
                title: body.title,
                description: body.description
            }
        })


        return NextResponse.json(updatedArticle, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: "server Error" }, { status: 500 })

    }

}


/**
 *
 * @method DELETE
 * @route ~/api/articles/:id
 * @desc DELETE SingleArticle
 * @access Public
 */
// this method to delete

export const DELETE = async (request: NextRequest, { params }: SingleArticleProps) => {

    try {

        // verfy first to know if the user was admin or not
        const user = verifyToken(request);
        if (user == null || !user.isAdmin) {
            return NextResponse.json(
                { message: "only admin can delete article,forbidden" },
                { status: 403 }
            )
        }
        const article = await prisma.article.findUnique({ where: { id: parseInt(params.id) } })
        if (!article) {
            return NextResponse.json({ message: "Article Not Found" }, { status: 404 })
        }

        //request to delete

        await prisma.article.delete({ where: { id: parseInt(params.id) } })

        return NextResponse.json({ message: "Article Deleted" }, { status: 200 })


    }
    catch (error) {

        return NextResponse.json({ message: "Error From server" }, { status: 500 })

    }

}