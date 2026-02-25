import { z } from "zod"

export const productSchema = z.object({
    title: z.string().min(10, "Title must be at least 10 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    price: z.coerce.number().positive("Price must be a positive number"),
    category: z.string().min(5, "Category must be at least 5 characters"),
    image: z.string().url("Must be a valid URL starts with https://"),
})

export type ProductFormValues = z.infer<typeof productSchema>
