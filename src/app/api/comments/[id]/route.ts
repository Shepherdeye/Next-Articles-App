import prisma from "@/utils/db"
import { UpdateCommentDto } from "@/utils/dtos";
import { commentUpdateSchema } from "@/utils/validationSchema";
import { verifyToken } from "@/utils/verfyJwt";
import { NextRequest, NextResponse } from "next/server"

interface props {
    params: { id: string }
}



/**
 * @method PUT
 * @path api/comments
 * @description Update  comments
 * @access  public {any loggin user}
 */
export async function PUT(request: NextRequest, { params }: props) {

    try {
        // define the comment 
        const comment = await prisma.comment.findUnique({ where: { id: parseInt(params.id) } });
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
        // update the comment
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
                where: { id: parseInt(params.id) },

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