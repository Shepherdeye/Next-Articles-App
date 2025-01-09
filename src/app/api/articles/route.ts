import { NextRequest, NextResponse } from "next/server"
import { CreateArticleDto } from "@/utils/dtos";
import { schemaValidation } from "@/utils/validationSchema";
import { Article } from "@prisma/client";
import prisma from "@/utils/db";

/**
 * 
 * @method GET 
 * @route ~/api/articles
 * @desc Get all data of  the articles
 * @access Public
 */

export const GET = async (request: NextRequest) => {

    try {
        const articles = await prisma.article.findMany();
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
 * @access Public
 */

// Dto is  the  short hand of => 'data transfer object'


export const POST = async (request: NextRequest) => {

    try {
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
