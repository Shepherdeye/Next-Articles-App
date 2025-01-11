import jwt from "jsonwebtoken";
import { JwtType } from "./types";

export function GenerateJWT(jwtPayload: JwtType): string {

    const token = jwt.sign(jwtPayload, process.env.SECRET_KEY as string, {
        expiresIn: "30d"
    });

    return token

}

