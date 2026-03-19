import { generateSlug } from "../utils/generateSlug.js";
import { prisma } from "../config/db.js";


const createBlogPost = async (req, res, next) => {

    try {
        console.log("blogController reached, createBlogPost()");
        const { title, excerpt ,content, status, categories} = req.body;
        const{ id:adminId} = req.user

        const slug = generateSlug(title);

        const post = await prisma.post.findUnique({
            where: {
                slug: slug
            }
        })
        
        if (post) {
            console.log("Error with creating post")
            return res.status(400).json({ message: "A post with this title already exists" });
        }

        const newPost = await prisma.post.create({
            data: { 
                adminId,
                slug, 
                title, 
                excerpt, 
                content, 
                status, 
                categories: {
                    connectOrCreate: categories?.map((name) => ({
                        where: {name},
                        create: {name}
                    })) ?? []
                }
            }
        });
        
        console.log("New post created: " + newPost);
        res.status(201).json({
            status: "success",
            data: {newPost},
        })
        
    } catch (error) {
        console.log("blogController, createBlogPost() error: " + error.message);
        next(error);
    }
}

const getBlogPost = async (req, res, next) => {

    try {
        console.log("blogController reached, getBlogPost()");
        const { slug } = req.params;

        const post = await prisma.post.findUniqueOrThrow({
            where: {
                slug: slug
            },
            select: {
                categories: true,
                title: true,
                excerpt:true,
                createdAt:true,
                content: true,
                status:true

            }
        });

        res.status(200).json({
            status: "success",
            data: {post}
        })

    } catch (error) {
        console.log("blogController, getBlogPost() error: " + error.message);
        next(error);
    }
}

const getAllBlogPosts = async (req, res, next) => {
    try {
        console.log("blogController reached, getAllBlogPosts()");
        const posts = await prisma.post.findMany({
            orderBy : {createdAt: 'desc'},
            select: {
                slug: true,
                title: true,
                excerpt: true,
                createdAt:true,
                categories:true
                //No need to get all posts content, this is good enough
            }
        })

        if(posts.length === 0){
            console.log("No posts");
            return res.status(200).json({
                status: "success",
                error: "No posts to return",
                data: posts
            })
        }

        res.status(200).json({
            status: "success",
            data: {posts}
        })
        
    } catch (error) {
        console.log("blogController, getAllBlogPosts() error: " + error.message);
        next(error)
    }
}


const updateBlogPost = async (req, res, next) => {
    try {
        
        const { slug } = req.params;
        const { title, excerpt, content, status, categories } = req.body;

        //No need the update will already handle the error if not found 
        // const post = await prisma.post.findUniqueOrThrow({
        //     where: {
        //         slug: slug
        //     }
        // })

        const newPost = await prisma.post.update({
            where: {
                slug: slug
            },
            data: {
                slug: title ? generateSlug(title) : slug,
                title: title,
                excerpt: excerpt,
                content: content,
                status: status,
                categories: {
                    set: [],
                    connectOrCreate: categories?.map( name => ({
                        where: { name },
                        create: { name }
                    })) ?? []
                }
            }
        })

        console.log("Updated post: " + JSON.stringify(newPost));
        
        res.status(200).json({
            status: "success",
            message: "Post has been updated",
            data: {newPost}
        })

    } catch (error) {
        console.log("blogController, updatePost() error: " + error.message);
        next(error);
    }
};

const deleteBlogPost = async (req, res, next) => {
    try {

        const { slug } = req.params;

        //Note no need for !post using this method instead
        const post = await prisma.post.findUniqueOrThrow({
            where: {
                slug: slug
            }
        })

        //Delete post
        await prisma.post.delete({
            where: {
                slug: slug
            }
        })

        res.status(200).json({
            status: "success",
            message: slug + " has been deleted",
            deletedPost: {post}
        })

    } catch (error) {
        console.log("blogController, deletePost() error: " + error.message);
        next(error);
    }
};

const getAllPublishedBlogPosts = async (req, res, next) => {
    try {
        console.log("blogController reached, getAllBlogPosts()");
        const posts = await prisma.post.findMany({
            where: {
                status: "PUBLISHED"
            },
            orderBy : {createdAt: 'desc'},
            select: {
                slug: true,
                title: true,
                excerpt: true,
                createdAt:true,
                categories:true,
                status: true
                //No need to get all posts content, this is good enough
            }
        })

        if(posts.length === 0){
            console.log("No posts");
            return res.status(200).json({
                status: "success",
                error: "No posts to return",
                data: posts
            })
        }

        res.status(200).json({
            status: "success",
            data: {posts}
        })
        
    } catch (error) {
        console.log("blogController, getPublishedBlogPosts() error: " + error.message);
        next(error)
    }
}

const getPublishedPost = async (req, res, next) => {
    try {
        console.log("blogController reached, getPublishedPost()");
        const { slug } = req.params;

        const post = await prisma.post.findUniqueOrThrow({
            where: {
                slug: slug,
                status: "PUBLISHED"
            },
            select: {
                categories: true,
                title: true,
                excerpt:true,
                createdAt:true,
                content: true

            }
        });

        res.status(200).json({
            status: "success",
            data: {post}
        })

    } catch (error) {
        console.log("blogController, getPublsihedPost() error: " + error.message);
        next(error);
    }
}

export { createBlogPost , getBlogPost, getAllBlogPosts, updateBlogPost, deleteBlogPost, getAllPublishedBlogPosts, getPublishedPost};