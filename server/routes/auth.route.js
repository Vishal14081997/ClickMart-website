import express from 'express'
import { signUp ,login } from '../controllers/auth.controller.js';
import verifyToken from '../middleware/verify.middleware.js';

const router = express.Router();

router.post("/signup", signUp);
router.post("/login" ,login);


export default router;