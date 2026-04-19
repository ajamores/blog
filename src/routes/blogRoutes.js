import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createBlogPost, getAllBlogPosts, getBlogPost, updateBlogPost, deleteBlogPost, getAllPublishedBlogPosts, getPublishedPost, saveImage } from "../controllers/blogController.js";
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

//Editor.js requires endpoint in comfig - see edit and create js files 
router.post("/admin/save-image", saveImage)


router.get("/", (req, res) => {
    res.json({
        message: "YO MOMMMA"
    })
})


export default router;


