import { Request, Response } from "express";
import { CreateExerciseService } from "../services/ExerciseServices/CreateExerciseService";

export const store = async (req: Request, res: Response) => {
    const { workoutId, name, duration, repetitions, sets, equipment } = req.body;

    const exercise = await CreateExerciseService({
        workoutId,
        name,
        duration,
        repetitions,
        sets,
        equipment,
    })

    return res.status(201).json(exercise);

}