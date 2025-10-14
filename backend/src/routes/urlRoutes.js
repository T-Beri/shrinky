import {Router} from "express";
import {createCustomUrl, createUrl} from "../controllers/urlControllers.js";

const router = Router();

router.post("/",createUrl);
router.post("/custom",createCustomUrl);

export default router;