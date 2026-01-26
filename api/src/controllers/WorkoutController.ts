import { Request, Response } from "express";
import { CreateWorkoutService } from "../services/WorkoutServices/CreateWorkoutService";

export const store = async (req: Request, res: Response): Promise<Response> => {
    const { goal, fitness_level, health_conditions, days_per_week, session_duration, plan_duration_weeks, lang, planId } = req.body;

    const workout = await CreateWorkoutService({
        goal,
        fitness_level,
        health_conditions,
        schedule: {
            days_per_week,
            session_duration,
        },
        plan_duration_weeks,
        lang,
        planId,
    });
    return res.status(201).json(workout);
}