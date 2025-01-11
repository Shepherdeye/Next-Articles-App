import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { JwtType } from "@/utils/types";


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

        //get JWT and  check if the JWT  exist or Not 
        const authToken = request.headers.get("authToken") as string;

        if (!authToken) {
            return NextResponse.json({ message: "Access Denied ,Not Authorized" },
                { status: 401 }
            )
        }

        // verify JWT token to know  the user info
        const userFromJWt = jwt.verify(authToken, process.env.SECRET_KEY as string) as JwtType;

        if (user.id === userFromJWt.id) {


            // delete user 
            await prisma.user.delete({ where: { id: user.id } });
            return NextResponse.json({ message: "Your Profile Account deleted Successfully" });

        }

        // if there is other user try to delete profile
        return NextResponse.json({ message: "Only The owner Of The User Can Delete it " },
            { status: 403 }
        )



    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" },
            { status: 500 }
        )
    }
}