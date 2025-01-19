import { Article } from "@prisma/client"

// get articles depend on the pageNumber
export async function getArticles(pageNumber: string | undefined): Promise<Article[]> {
    const response = await fetch(`http://localhost:3000/api/articles?pageNumber=${pageNumber}`);
    if (!response.ok) {
        throw new Error('Failed to fetch articles')
    }

    return await response.json();
}


// get articles Count 

export async function getArticlesCount(): Promise<number> {
    const response = await fetch(`http://localhost:3000/api/articles/count`);
    if (!response.ok) {
        throw new Error('Failed to get articles count')
    }

    const { count } = await response.json() as { count: number };
    return count
}

// get articles depend on the searchText
export async function searchForArticle(searchText: string): Promise<Article[]> {
    const response = await fetch(`http://localhost:3000/api/articles/search?searchText=${searchText}`);
    if (!response.ok) {
        throw new Error('Failed to fetch articles')
    }

    return await response.json();
}
