import { Article, Comment, User } from "@prisma/client";


export type JwtType = {
    id: number;
    name: string;
    isAdmin: boolean;
}



export type CommentWithUSer = Comment & { user: User };
export type SingleArticle = Article & { comments: CommentWithUSer[] }