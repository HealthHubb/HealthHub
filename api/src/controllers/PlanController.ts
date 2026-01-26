import { Request, Response } from 'express';
import { CreatePlanService } from '../services/PlanServices/CreatePlanService';

export const store = async (req: Request, res: Response): Promise<Response> => {
  const { duration } = req.body;
  const userId = req.user.id;

  const plan = await CreatePlanService({
    duration,
    userId,
  });

  return res.status(201).json(plan);
};
