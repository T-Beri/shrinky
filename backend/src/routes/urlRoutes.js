import {Router} from "express";
import {createUrl,retrieveUrl} from "../controllers/urlControllers.js";

const router = Router();

router.post("/",createUrl);
router.get("/:shortUrl",retrieveUrl);
export default router;