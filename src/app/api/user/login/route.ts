import bcrypt from 'bcryptjs';

import prisma from "@/utils/db";
import { LoginUserDto } from "@/utils/dtos";
import { loginSchema } from "@/utils/validationSchema";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route /api/user/login
 * @method POST
 * @description login user
 * @access  Public
 */

export async function POST(request: NextRequest) {

    try {

        const body = await request.json() as LoginUserDto;

        // make the validation  to the request

        const validation = loginSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });
        }


        // get the same email from the prisma db

        const user = await prisma.user.findUnique({ where: { email: body.email } });
        if (!user) {
            return NextResponse.json({ message: "Invalid Email or Password" }, { status: 400 });
        }
        // make ccompare  by using  bcrypt to  make sure  that 
        //  is  the same  password  of the encription one  in the  prisam  db
        const isPassworMatch = await bcrypt.compare(body.password, user.password);

        if (!isPassworMatch) {
            return NextResponse.json({ message: "Invalid Email or Password" }, { status: 400 })
        }

        // create a  JWT token
        const token = null;

        // if  successfully login 
        return NextResponse.json({ message: "Authenticated .", token }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }

}