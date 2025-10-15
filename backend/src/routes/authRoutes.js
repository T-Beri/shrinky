import express from "express"
import {register,login,checker} from "../controllers/authController.js"

const router = express.Router();
router.post("/register",register);
router.post("/login",login);
router.get("/check",checker);
export default router;