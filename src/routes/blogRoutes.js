import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createBlogPost, getAllBlogPosts, getBlogPost, updateBlogPost, deleteBlogPost } from "../controllers/blogController.js";
import { validateRequest } from "../controllers/validRequest.js";
import { createBlogPostSchema, updateBlogPostSchema } from "../validators/postValidator.js";

const router = express.Router();


//-------Avaiabile to public-----
router.get("/", getAllBlogPosts)
router.get("/:slug", getBlogPost);



//--------Auth Required--------
//guarded routes
router.use(authMiddleware);

router.post("/create", validateRequest(createBlogPostSchema), createBlogPost);
router.delete("/:slug", deleteBlogPost);
router.patch("/:slug", validateRequest(updateBlogPostSchema), updateBlogPost);

router.get("/", (req, res) => {
    res.json({
        message: "YO MOMMMA"
    })
})


export default router;


