import { Router } from "express";
import homecontroller from "../controllers/home.controller";

const router: Router = Router();

router.get("/", homecontroller);

export default router;
