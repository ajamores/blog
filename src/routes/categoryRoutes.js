import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { createCategory, deleteCategory } from '../controllers/categoryController.js';


const router = express.Router();


//----------Auth middleware------------
router.use(authMiddleware);

//-----------Endpoints------------------
router.post("/",  createCategory);
router.delete("/:slug", deleteCategory);


export default router;