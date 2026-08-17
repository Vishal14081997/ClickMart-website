import express from 'express'
import { createCategory, getAllCategory, imageupload } from '../controllers/admin.controller.js';
import verifyToken from '../middleware/verify.middleware.js';
import { upload } from '../middleware/upload.middleware.js';
import uploadToClodinary from '../middleware/cloudinary.middleware.js';


const router = express.Router();

router.post("/create-category", verifyToken, upload.single("category_image"), uploadToClodinary, createCategory);
router.get("/get-all-category", verifyToken, getAllCategory)
router.post("/image-upload", upload.single("img"), uploadToClodinary, imageupload)

export default router;