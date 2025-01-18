import { NextRequest, NextResponse } from "next/server"



/**
 * @method GET
 * @route api/articles/search/searchText=value
 * @description Get article by searchText
 * @access  public
 */


export async function GET(request: NextRequest) {
    try {

    } catch (error) {
        return NextResponse.json(
            { message: "Internal Server Error" }
        )

    }
}