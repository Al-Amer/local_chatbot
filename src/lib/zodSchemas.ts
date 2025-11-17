import {z } from "zod"

export const AskSchema = z.object({
    question : z.string().min(1,"Question is required")
});

export type AskInput = z.infer<typeof AskSchema>;