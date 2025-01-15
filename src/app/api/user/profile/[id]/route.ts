import bcrypt from 'bcryptjs';
import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/utils/verfyJwt";
import { UpdatUserDto } from "@/utils/dtos";



interface props {
    params: { id: string }
}


/**
 * @method DELETE
 * @route api/user/profile/:id
 * @description Delete a user profile
 * @access Private
 */

export async function DELETE(request: NextRequest, { params }: props) {
    try {

        // geting user from prisma db
        const user = await prisma.user.findUnique({ where: { id: parseInt(params.id) } });

        if (!user) {
            return NextResponse.json({ message: "Account Not found" },
                { status: 404 }
            )
        }


        // verify JWT token to know  the user info
        const userFromJWt = verifyToken(request);

        if (userFromJWt != null && user.id === userFromJWt.id) {

            // delete user
            await prisma.user.delete({ where: { id: user.id } });
            return NextResponse.json({ message: "Your Profile Account deleted Successfully" }
                , { status: 200 }
            );

        }

        // if there is other user try to delete profile
        return NextResponse.json({ message: "Forbidden,Only The owner Of The User Can Delete it" },
            { status: 403 }
        )



    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" },
            { status: 500 }
        )
    }
}

/**
 * @method GET
 * @route api/user/profile/:id
 * @description GET a user profile
 * @access Private
 */

export async function GET(request: NextRequest, { params }: props) {
    try {

        // get user from Prisma DB
        const user = await prisma.user.findUnique({

            where: { id: parseInt(params.id) },

            select: {
                id: true,
                name: true,
                email: true,
                updatedAt: true,
                createdAt: true
            }


        });

        // check if user exist or not
        if (!user) {
            return NextResponse.json(
                { message: "User Not Found" },
                { status: 404 }
            )
        }

        // catch the data  of the user from the JWT by using verifyToken function 
        const userFromJWt = verifyToken(request);

        // check if the data from user in  prisma  db  matched the userFromJWt 
        if (userFromJWt === null || userFromJWt.id != user.id) {
            return NextResponse.json(
                { message: "You are not allowed,forbidden,Access Denied" },
                { status: 403 }
            )
        }

        // if all was good 
        return NextResponse.json(
            { ...user, message: "you profile" },
            { status: 200 }
        )



    } catch (error) {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        )
    }

}


/**
 * @method PUT
 * @route api/user/profile/:id
 * @description Update a user profile
 * @access Private
 */

export async function PUT(request: NextRequest, { params }: props) {
    try {
        // get user from prisma DB
        const user = await prisma.user.findUnique({ where: { id: parseInt(params.id) } });
        // check  if the user exist or not
        if (!user) {
            return NextResponse.json(
                { message: "User Not Found" },
                { status: 404 }
            )
        }
        // verfiy the user data from JWT 
        const userFromJWt = verifyToken(request);
        //  check  if the userFromJWT has the same data of the user in the Prisma DB

        if (userFromJWt == null || userFromJWt.id != user.id) {
            return NextResponse.json(
                { message: "you are not allowed,Forbiden,access denied" },
                { status: 403 }
            )
        }
        // take the data that need to update from the request body
        const body = await request.json() as UpdatUserDto;

        // make condition if the body have a password we need to coded it
        if (body.password) {
            // make other condition to  insure that the character not less than 6
            if (body.password.length < 6) {
                return NextResponse.json(
                    { message: "Password must be at least 6 characters" },
                    { status: 400 }
                )
            }
            const salt = await bcrypt.genSalt(10);
            body.password = await bcrypt.hash(body.password, salt)
        }
        // now we need to add the new values of the user profile
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(params.id) },
            data: {
                name: body.name,
                email: body.email,
                password: body.password
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true
            }
        })
        // return the updated user

        // we can  use this or the select that in prisma and pass the ...other in the respone instead of the updatedUser
        // const { password, ...other } = updatedUser;


        return NextResponse.json(
            { ...updatedUser, message: "Updated successfully" },
            { status: 200 }
        )



    } catch (error) {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        )
    }

}