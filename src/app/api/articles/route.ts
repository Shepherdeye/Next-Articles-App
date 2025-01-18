import { NextRequest, NextResponse } from "next/server"
import { CreateArticleDto } from "@/utils/dtos";
import { schemaValidation } from "@/utils/validationSchema";
import { Article } from "@prisma/client";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verfyJwt";
import { ARTICLE_PER_PAGE } from "@/utils/constants"
/**
 * 
 * @method GET 
 * @route ~/api/articles
 * @desc Get all data of  the articles
 * @access Public
 */

export const GET = async (request: NextRequest) => {

    try {
        const pageNumber = request.nextUrl.searchParams.get("pageNumber") || "1";

        const articles = await prisma.article.findMany({
            skip: ARTICLE_PER_PAGE * ((parseInt(pageNumber)) - 1),
            take: ARTICLE_PER_PAGE,
        });


        return NextResponse.json(articles, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error From  server" }, { status: 500 });
    }

}
/**
 * 
 * @method POST 
 * @route ~/api/articles
 * @desc Create New articles
 * @access private (only admin)
 */

// Dto is  the  short hand of => 'data transfer object'


export const POST = async (request: NextRequest) => {

    try {

        // verfy first to know if the user was admin or not
        const user = verifyToken(request);
        if (user == null || !user.isAdmin) {
            return NextResponse.json(
                { message: "only admin can create article,forbidden" },
                { status: 403 }
            )
        }

        const body = (await request.json()) as CreateArticleDto;

        const validation = schemaValidation.safeParse(body);
        if (!validation.success) {
            return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });

        }

        const newArticle: Article = await prisma.article.create({
            data: {
                title: body.title,
                description: body.description
            }
        });

        return NextResponse.json(newArticle, { status: 201 });

    }
    catch (error) {
        return NextResponse.json({ message: "Error From  server" }, { status: 500 });
    }
}
