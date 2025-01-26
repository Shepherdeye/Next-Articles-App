import { DOMAIN } from "@/utils/constants";
import { Comment } from "@prisma/client";
import axios from "axios";


// in this function we  sent the token manually  
// because we are in the server so the browser can not send it  

export async function getAllComments(token: string): Promise<Comment[]> {
    try {
        const response = await axios.get(`${DOMAIN}/api/comments`, {
            headers: {
                Cookie: `jwtToken=${token}`
            }
        });
        return response.data; // Assuming `data` is an array of comments
    } catch (error) {
        throw new Error("Cannot fetch comments: " + (error as Error).message);
    }
}
