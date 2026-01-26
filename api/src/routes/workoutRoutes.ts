import { Router } from "express";
import { store } from "../controllers/WorkoutController";

const router = Router();

router.post('/workout', store);

export default router;