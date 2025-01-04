import { NextRequest, NextResponse } from "next/server"
import { articles } from "@/utils/data"
import { Article } from "@/utils/types";
import { CreateArticleDto } from "@/utils/dtos";
import { schemaValidation } from "@/utils/validationSchema";


/**
 * 
 * @method GET 
 * @route ~/api/articles
 * @desc Get all data of  the articles
 * @access Public
 */

export const GET = (request: NextRequest) => {

    // console.log(request);
    return NextResponse.json(articles, { status: 200 });

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

    const body = (await request.json()) as CreateArticleDto;

    const validation = schemaValidation.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });

    }

    const newArticle: Article = {
        id: articles.length + 1,
        userId: 200 + articles.length,
        title: body.title,
        body: body.body
    }

    articles.push(newArticle);
    return NextResponse.json(newArticle, { status: 201 });
}
