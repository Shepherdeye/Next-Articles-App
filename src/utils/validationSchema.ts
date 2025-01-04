import { z } from "zod";

export const schemaValidation = z.object({
    title: z.string().min(2).max(200),
    body: z.string().min(2),
});