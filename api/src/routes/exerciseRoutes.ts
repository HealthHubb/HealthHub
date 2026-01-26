import { Router } from 'express';
import { store } from '../controllers/ExerciseController';

const router = Router();

router.post('/exercise', store);

export default router;
