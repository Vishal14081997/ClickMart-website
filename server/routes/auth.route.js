import express from 'express'
import { signUp ,login, profileget } from '../controllers/auth.controller.js';
import verifyToken from '../middleware/verify.middleware.js';

const router = express.Router();

router.post("/signup", signUp);
router.post("/login" ,login);
router.get("/profile", verifyToken, profileget )

export default router;