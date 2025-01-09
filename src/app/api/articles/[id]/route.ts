import { articles } from "@/utils/data";
import { UpdateArticleDto } from "@/utils/dtos";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";


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
        const article = await prisma.article.findUnique({ where: { id: parseInt(params.id) } })
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

    const article = articles.find((article) => article.id === parseInt(params.id));

    if (!article) {
        return NextResponse.json({ message: "Article Not Found" }, { status: 404 })
    }

    const body = (await request.json()) as UpdateArticleDto;


    return NextResponse.json({ message: "Article Updated" }, { status: 200 })

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

    const article = articles.find((article) => article.id === parseInt(params.id));

    if (!article) {
        return NextResponse.json({ message: "Article Not Found" }, { status: 404 })
    }



    return NextResponse.json({ message: "Article Deleted" }, { status: 200 })

}