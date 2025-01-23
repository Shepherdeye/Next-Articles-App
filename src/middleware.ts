import { NextResponse, NextRequest } from "next/server"


export function middleware(request: NextRequest) {
    const authToken = request.cookies.get("jwtToken");

    const jwtToken = authToken?.value as string;

    if (!jwtToken) {
        if (request.nextUrl.pathname.startsWith("/api/user/profile/")) {
            return NextResponse.json(
                { message: "Not Authorized, Access Denied,From Middleware" },
                { status: 401 }
            )
        }
    } else {
        if (
            request.nextUrl.pathname.startsWith("/login") ||
            request.nextUrl.pathname.startsWith("/register")
        ) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }
}

export const config = {
    matcher: ['/api/user/profile/:path*', "/login", "/register"]
}