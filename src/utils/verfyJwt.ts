import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import { JwtType } from './types';

// Verify Token For API End Point
export function verifyToken(request: NextRequest): JwtType | null {
    try {
        const authToken = request.cookies.get("jwtToken");
        const jwtToken = authToken?.value as string;
        if (!jwtToken) return null;

        const privateKey = process.env.SECRET_KEY as string;
        const userPayload = jwt.verify(jwtToken, privateKey) as JwtType;

        return userPayload;
    } catch (error) {
        return null;
    }
}


