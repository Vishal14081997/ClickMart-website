import express from 'express'
import { createCategory, getAllCategory } from '../controllers/admin.controller.js';
import verifyToken from '../middleware/verify.middleware.js';

const router = express.Router();

router.post("/create-category", verifyToken, createCategory)
router.get("/get-all-category", verifyToken, getAllCategory)

export default router;