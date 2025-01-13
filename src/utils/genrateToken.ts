import jwt from "jsonwebtoken";
import { JwtType } from "./types";
import { serialize } from "cookie";

export function GenerateJWT(jwtPayload: JwtType): string {

    const token = jwt.sign(jwtPayload, process.env.SECRET_KEY as string, {
        expiresIn: "30d"
    });

    return token

}

// create Coookie by  JWT 

export function generateCookies(request: JwtType): string {

    const token = GenerateJWT(request);
    const cookie = serialize("jwtToken", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 30 * 24 * 60 * 60 * 1000,
        path: "/"
    })
    return cookie
}