import { z } from "zod";


// this schema for Srticle  creation
export const schemaValidation = z.object({
    title: z.string({
        required_error: 'Title is required',
        invalid_type_error: "the value should be string"

    }).min(2, { message: "at least should  be two character " }).max(200),
    description: z.string().min(2),
});

// this schema for user Register /signup / انشاء  حساب 

export const registerSchema = z.object({
    name: z.string({
        required_error: 'Name is required',
        invalid_type_error: "the value should be string"
    }).min(2).max(100),
    email: z.string().min(5).max(100).email("invalid email"),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, { message: "Password should be more than 6 characters" }).max(100)
})
// this schema for user login
export const loginSchema = z.object({

    email: z.string({
        required_error: 'Email is required',
    }).min(5).max(100).email("invalid email"),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, { message: "Password should be more than 6 characters" }).max(100)
})
// create comments schema

export const commentSchema = z.object(
    {
        text: z.string(
            {
                required_error: 'Comment is required',
            }
        ).min(2, "At least enter two character in the comment"),
        articleId: z.number()
    }
)
export const commentUpdateSchema = z.object(
    {
        text: z.string(
            {
                required_error: 'Comment is required',
            }
        ).min(2, "At least enter two character in the comment"),

    }
)

// update user profile schema
export const updateProfileSchema = z.object({
    name: z.string({
        required_error: 'Name is required',
        invalid_type_error: "the value should be string"
    }).min(2).max(100).optional(),
    email: z.string().min(5).max(100).email("invalid email").optional(),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, { message: "Password should be more than 6 characters" }).max(100).optional()
})