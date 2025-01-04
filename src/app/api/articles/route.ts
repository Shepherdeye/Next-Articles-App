import { NextRequest, NextResponse } from "next/server"
import { articles } from "@/utils/data"

/**
 * 
 * @method GET 
 * @route "~/api/articles"
 * @desc "Get all data of  the articles" 
 * @access Public
 */

export const GET = (request: NextRequest) => {

    // console.log(request);
    return NextResponse.json(articles, { status: 200 });

}

