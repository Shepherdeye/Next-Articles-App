
import prisma from "@/utils/db";
import { CreateCommentDto } from "@/utils/dtos";
import { commentSchema } from "@/utils/validationSchema";
import { verifyToken } from "@/utils/verfyJwt"
import { NextRequest, NextResponse } from "next/server"

/**
 * @method POST
 * @path api/comments
 * @description create new comment
 * @access  private
 * 
 */
export async function POST(request: NextRequest) {
    try {
        // get verfy and make sure that is a loggin user 
        const user = verifyToken(request);
        if (!user) {
            return NextResponse.json(
                { message: "Only Login Users can make Comments,access denied" },
                { status: 401 }
            )
        }
        // get the comment data from the request body
        const body = await request.json() as CreateCommentDto;
        // make validation to the comment body
        const validation = commentSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { message: validation.error.errors[0].message },
                { status: 400 }
            )
        }
        // create new comment
        const newcomment = await prisma.comment.create({
            data: {
                text: body.text,
                articleId: body.articleId,
                userId: user.id
            }

        })

        return NextResponse.json(
            { newcomment, message: "Comment Created Successfully" },
            { status: 201 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        )
    }
}