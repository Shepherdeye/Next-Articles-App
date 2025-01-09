import { z } from "zod";

export const schemaValidation = z.object({
    title: z.string({
        required_error: 'Title is required',
        invalid_type_error: "the value should be string"

    }).min(2, { message: "at least should  be two character " }).max(200),
    description: z.string().min(2),
});