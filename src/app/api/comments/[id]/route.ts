import prisma from "@/utils/db"
import { UpdateCommentDto } from "@/utils/dtos";
import { commentUpdateSchema } from "@/utils/validationSchema";
import { verifyToken } from "@/utils/verfyJwt";
import { NextRequest, NextResponse } from "next/server"

interface props {
    params: Promise<{ id: string }>;
}



/**
 * @method PUT
 * @path api/comments
 * @description Update  comment
 * @access  private {owner/Creater user}
 */

export async function PUT(request: NextRequest, { params }: props) {

    try {

        const articleId = (await params).id;

        // define the comment 
        const comment = await prisma.comment.findUnique({ where: { id: parseInt(articleId) } });
        // check if find  the comment or not
        if (!comment) {
            return NextResponse.json(
                { message: "Comment Not Found" },
                { status: 404 }
            )
        }
        // verfiy to know if the user login or not
        const user = verifyToken(request);
        if (user == null || !user) {
            return NextResponse.json(
                { message: "No Token Provided ,Access denied" },
                { status: 401 }
            )
        }
        // check if the comment belong to the login user or not
        if (comment.userId != user.id) {
            return NextResponse.json(
                { message: "only Comment Creater Can Update It ,Forbidden" },
                { status: 403 }
            )
        }
        // validate the comment body
        const body = await request.json() as UpdateCommentDto;

        const validation = commentUpdateSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { message: validation.error.errors[0].message },
                { status: 400 }
            )
        }
        // update the comment
        const updatedComment = await prisma.comment.update(
            {
                where: { id: parseInt(articleId) },
                data: {
                    text: body.text
                }
            }

        )
        // return the updated comment
        return NextResponse.json(

            { updatedComment, message: "Comment Updated Successfully" },
            { status: 200 }
        )

    } catch (error) {
        return NextResponse.json(
            { message: "internal server Error" },
            { status: 500 }
        )
    }
}


/**
 * @method DELETE
 * @path api/comments
 * @description Delete  comment
 * @access  private {owner/Creater user /admin}
 */

export async function DELETE(request: NextRequest, { params }: props) {
    try {
        const articleId = (await params).id;

        // define the comment 
        const comment = await prisma.comment.findUnique({ where: { id: parseInt(articleId) } });
        // check if find  the comment or not
        if (!comment) {
            return NextResponse.json(
                { message: "Comment Not Found" },
                { status: 404 }
            )
        }

        // verfiy to know if the user login or not
        const user = verifyToken(request);
        if (user == null || !user) {
            return NextResponse.json(
                { message: "No Token Provided ,Access denied" },
                { status: 401 }
            )
        }

        // check if the comment belong to the login user or not
        if (comment.userId === user.id || user.isAdmin == true) {
            // delete comment
            await prisma.comment.delete({ where: { id: parseInt(articleId) } });
            return NextResponse.json(
                { message: "Comment Deleted Successfully" },
                { status: 200 }
            )
        }

        return NextResponse.json(
            { message: "only Comment Creater or Admin Can Delete It ,Forbidden" },
            { status: 403 }
        )

    } catch (error) {
        return NextResponse.json(
            { message: "internal server Error" },
            { status: 500 }
        )
    }
}