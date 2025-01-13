import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @path api/user/logout
 * @description Logout user
 * @access Public
 */

export function GET(request: NextRequest) {
    // try {
    //     const response = NextResponse.json(
    //         { message: "logout" },
    //         { status: 200 }
    //     );

    //     // Remove the cookie by setting it with an expired date
    //     response.cookies.set('jwtToken', '', {
    //         path: '/',
    //         expires: new Date(0), // Set the expiration to a past date
    //     });

    //     return response;
    // } catch (error) {
    //     return NextResponse.json(
    //         { message: "Failed to log out, internal server error" },
    //         { status: 500 }
    //     );
    // }

    try {

        const response = NextResponse.json(
            { message: "Logout Successfully" },
            { status: 200 }
        )

        // just  remove the  cookies
        response.cookies.delete("jwtToken");
        return response
    } catch (error) {

    }

}
