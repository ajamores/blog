
import { z } from 'zod';





const createBlogPostSchema = z.object({
    // adminId: z.uuid(), //No need to include ids in schemas 
    title: z.string().min(5, "Title must be at least 5 characters").max(100, "Title is too long"),
    excerpt: z.string().min(10, "Excerpt must be at least 10 characters").max(300, "Excerpt is too long"),
    content: z.any().optional(), //Note that editor.js will send you the block json elements
    readingTime: z.int().min(1).max(60).optional(),
    status: z.enum(['DRAFT', 'PUBLISHED'], {
        error: "Status must be DRAFT or PUBLISHED"
    }).default("DRAFT"),
    categories: z.array(z.string()
        .min(2, "Category must be between 2 and 15 chars")
        .max(15, "Category must be between 2 and 15 chars"))
        .optional()
    
    
})


//For updating a post with patch
const updateBlogPostSchema = createBlogPostSchema.partial();

export { createBlogPostSchema, updateBlogPostSchema };