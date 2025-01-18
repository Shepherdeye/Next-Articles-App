import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server"



/**
 * @method GET
 * @route api/articles/search/searchText=value
 * @description Get article by searchText
 * @access  public
 */


export async function GET(request: NextRequest) {
    try {
        const searchText = request.nextUrl.searchParams.get("searchText");
        let articles;
        if (searchText) {
            articles = await prisma.article.findMany(
                {
                    where: {
                        title: {
                            startsWith: searchText,
                            mode: "insensitive"
                        }
                    }
                }
            )
            return NextResponse.json(
                articles,
                { status: 200 }
            )
        }



    } catch (error) {
        return NextResponse.json(
            { message: "Internal Server Errorw" }
        )

    }
}