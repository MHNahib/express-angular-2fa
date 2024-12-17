import { Router } from "express";
import { signupcontroller } from "../controllers/auth.controller";

const router: Router = Router();

router.post("/signup", signupcontroller);

export default router;
