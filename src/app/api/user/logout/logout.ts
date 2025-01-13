// import { NextRequest, NextResponse } from 'next/server';

// /**
//  *  @method  GET
//  *  @route   ~/api/users/logout
//  *  @desc    Logout User
//  *  @access  public
//  */
// export function GET(request: NextRequest) {
//     try {
//         const response = NextResponse.json({ message: 'logout' }, { status: 200 });

//         // Set-Cookie header to delete the jwtToken cookie
//         response.cookies.set('jwtToken', '', {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',
//             maxAge: 0, // Delete the cookie immediately
//             path: '/', // Ensure it matches the scope of the cookie
//         });

//         return response;
//     } catch (error) {
//         console.error('Error during logout:', error);
//         return NextResponse.json(
//             { message: 'internal server error' },
//             { status: 500 }
//         );
//     }
// }
