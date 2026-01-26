import { Router } from "express";
import { store } from "../controllers/PlanController";

const router = Router();

router.post('/plan', store);

export default router;