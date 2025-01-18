import { Article } from "@prisma/client"

// get articles depend on  the  pageNumber
export async function getArticles(pageNumber: string): Promise<Article[]> {
    const response = await fetch(`http://localhost:3000/api/articles?pageNumber=${pageNumber}`);
    if (!response.ok) {
        throw new Error('Failed to fetch articles')
    }

    return await response.json();
}