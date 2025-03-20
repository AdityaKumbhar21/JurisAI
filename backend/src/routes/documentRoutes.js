import {Router} from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import upload ,{ uploadFile } from "../controllers/document.controller.js";

const router = Router();



router.post('/upload', isLoggedIn,upload.single('file'), uploadFile);



export default router;