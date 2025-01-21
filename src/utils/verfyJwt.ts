import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import { JwtType } from './types';


// Verify Token For API End Point
export function verifyToken(request: NextRequest): JwtType | null {
    try {

        const jwtTokenPath = request.cookies.get("jwtToken");

        const token = jwtTokenPath?.value as string;

        if (!token) return null;

        const secretKey = process.env.SECRET_KEY as string;

        const userPaylodFromToken = jwt.verify(token, secretKey) as JwtType;

        return userPaylodFromToken;

    } catch (error) {

        return null
    }

}

// verify token for  the pages 
export function verifyTokenForPages(token: string): JwtType | null {
    try {

        const secretKey = process.env.SECRET_KEY as string;

        const userPaylodFromToken = jwt.verify(token, secretKey) as JwtType;

        if (!userPaylodFromToken) return null;

        return userPaylodFromToken;

    } catch (error) {
        return null
    }

}
