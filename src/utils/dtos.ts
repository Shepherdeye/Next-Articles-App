
export interface CreateArticleDto {
    title: string;
    description: string;
}
export interface UpdateArticleDto {
    title?: string;
    description?: string;
}
export interface RegisterUserDto {
    name: string;
    email: string;
    password: string
}
export interface LoginUserDto {
    email: string;
    password: string
}
export interface UpdatUserDto {
    name?: string;
    email?: string;
    password?: string
}