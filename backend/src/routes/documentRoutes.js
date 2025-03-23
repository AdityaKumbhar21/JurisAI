import {Router} from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import upload ,{ getFileStatus, getHistory, uploadFile } from "../controllers/document.controller.js";

const router = Router();



router.post('/upload', isLoggedIn,upload.single('file'), uploadFile);

router.get('/getstatus/:id', isLoggedIn, getFileStatus);
router.get('/history', isLoggedIn, getHistory);

export default router;