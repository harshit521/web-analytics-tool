import {Router} from "express"
import {createShortUrls} from "../controllers/url.controllers.js"
console.log("URL router loaded");
const router = Router();
router.post("/shorten",createShortUrls);
export default router;
