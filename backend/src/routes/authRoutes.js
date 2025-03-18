import {Router} from "express";
import { validateUser } from "../middlewares/validate.middleware.js";
import { signup, login , logout, checkAuth } from "../controllers/auth.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();


router.post("/signup", validateUser,signup);
router.post("/login", validateUser,login);
router.post("/logout", logout);
router.get("/check",isLoggedIn , checkAuth);

export default router;