import { Router } from "express";
import {
  logincontroller,
  signupcontroller,
} from "../controllers/auth.controller";

const router: Router = Router();

router.post("/signup", signupcontroller);
router.post("/login", logincontroller);

export default router;
