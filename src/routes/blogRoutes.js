import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createBlogPost, getAllBlogPosts, getBlogPost, updateBlogPost, deleteBlogPost, getAllPublishedBlogPosts, getPublishedPost } from "../controllers/blogController.js";
import { validateRequest } from "../middleware/validRequestMiddleware.js";
import { createBlogPostSchema, updateBlogPostSchema } from "../validators/postValidator.js";

const router = express.Router();


//-------Avaiabile to public-----

router.get("/", getAllPublishedBlogPosts )
router.get("/:slug", getPublishedPost)



//--------Auth Required--------
//guarded routes
router.use(authMiddleware);

router.post("/admin/create", validateRequest(createBlogPostSchema), createBlogPost);
router.get("/admin/all", getAllBlogPosts);
router.get("/admin/:slug", getBlogPost);
router.delete("/admin/delete/:slug", deleteBlogPost);
router.patch("/admin/:slug", validateRequest(updateBlogPostSchema), updateBlogPost);




router.get("/", (req, res) => {
    res.json({
        message: "YO MOMMMA"
    })
})


export default router;


