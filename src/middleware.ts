import { NextResponse, NextRequest } from "next/server"


export function middleware(request: NextRequest) {
    const authToken = request.cookies.get("jwtToken");
    const jwtToken = authToken?.value as string;

    if (!jwtToken) {
        return NextResponse.json(
            { message: "Not Authorized, Access Denied,From Middleware" },
            { status: 401 }
        )
    }
}
export const config = {
    matcher: ['/api/user/profile/:path*']
}