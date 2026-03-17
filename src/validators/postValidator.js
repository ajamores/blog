import { error } from 'node:console';
import { z } from 'zod';


//paragrapgh block 
const paragraphBlock = z.object({
    type: z.literal('paragraph'),
    data: z.object({
        text: z.string().min(1, "Paragraph text cannot be empty")
    })
});

//image block
const imageBlock = z.object({
    type: z.literal('image'),
    data: z.object({
       url: z.url("Please provide a valid image URL"),
       caption: z.string().optional()
    })
});

//heading block 
const headingBlock = z.object({
    type: z.literal('heading'),
    data: z.object({
         text: z.string().min(1, "Heading text cannot be empty")
    })
});

/**
 *  z.union means the value can be any one of those block types. 
 * It validates each item in your content array against each schema 
 * until one matches.
 */
const blockSchema = z.union([
    paragraphBlock,
    headingBlock,
    imageBlock
]);



const createBlogPostSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters").max(100, "Title is too long"),
    excerpt: z.string().min(10, "Excerpt must be at least 10 characters").max(300, "Excerpt is too long"),
    content: z.array(blockSchema).optional(),
    status: z.enum(['DRAFT', 'PUBLISHED'], {
        error: "Status must be DRAFT or PUBLISHED"
    }).default("DRAFT"),
    
})


//For updating a post with patch
const updateBlogPostSchema = createBlogPostSchema.partial();

export { createBlogPostSchema, updateBlogPostSchema };