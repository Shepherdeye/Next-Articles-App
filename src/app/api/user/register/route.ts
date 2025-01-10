import prisma from "@/utils/db";
import { RegisterUserDto } from "@/utils/dtos"
import { registerSchema } from "@/utils/validationSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';


/**
 * 
 * @method POST 
 * @route ~/api/user/register
 * @desc Create a new user
 * @access Public
 */

export async function POST(request: NextRequest) {
    try {
        // define  the body from the coming  request
        const body = (await request.json()) as RegisterUserDto;

        // make validation by use registerSchema
        const validation = registerSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 })
        }
        // define the user by chickin  this new  user  is already registered  or  not
        const user = await prisma.user.findUnique({ where: { email: body.email } })

        if (user) {
            return NextResponse.json({ message: " Warning... this User Already Registered" }, { status: 400 })
        }


        // make  the  password  incryption
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);

        const newUser = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: hashedPassword
            },
            select: {
                id: true,
                name: true,
                isAdmin: true
            }
        })
        const token = null;

        return NextResponse.json({ ...newUser, token }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }

}