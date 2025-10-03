import {Router} from "express";
import {createUrl} from "../controllers/urlControllers.js";

const router = Router();

router.post("/",createUrl);

export default router;