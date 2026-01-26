import { AppError } from "../../errors/AppError";
import { Exercise } from "../../models/Exercise";
import { Workout } from "../../models/Workout";

interface Request {
    workoutId: string | number;
    name: string;
    duration: number;
    repetitions: number;
    sets: number;
    equipment: string;
}

export const CreateExerciseService = async ({ workoutId, name, duration, repetitions, sets, equipment }: Request): Promise<Exercise> => {
    const workout = await Workout.findByPk(workoutId);

    if (!workout) {
        throw new AppError('Treino não encontrado');
    }

    const exercise = await Exercise.create({
        workoutId: workout.id,
        name,
        duration,
        repetitions,
        sets,
        equipment,
    })

    return exercise;
}