import axios from 'axios';
import { Workout } from '../../models/Workout';
import { CreateExerciseService } from '../ExerciseServices/CreateExerciseService';

interface ApiResponse {
  result: {
    total_weeks: number;
    exercises: {
      day: string;
      exercises: {
        name: string;
        duration: string;
        repetitions: string;
        sets: string;
        equipment: string;
      }[];
    }[];
  };
}

interface Request {
  goal: string;
  fitness_level: 'beginner' | 'intermediate' | 'advanced';
  health_conditions?: string;
  schedule: {
    days_per_week: number;
    session_duration: number;
  };
  plan_duration_weeks: number;
  lang?: 'en' | 'es' | 'tr';
  planId: number;
}

export const CreateWorkoutService = async (data: Request) => {
  const host = process.env.AI_URL;
  const url = `https://${host}/generateWorkoutPlan`;

  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-rapidapi-host': host,
      'x-rapidapi-key': process.env.AI_KEY,
    },
  };

  const { data: ApiResponse } = await axios.post<ApiResponse>(
    url,
    data,
    options,
  );

  const savedWorkouts = [];

  for (const day of ApiResponse.result.exercises) {
    const workout = await Workout.create({
      day: day.day,
      plan_duration_weeks: ApiResponse.result.total_weeks,
      planId: data.planId,
    });

    const exercisePromises = day.exercises.map((ex) => {
      return CreateExerciseService({
        workoutId: workout.id,
        name: ex.name,
        duration: parseInt(ex.duration),
        repetitions: parseInt(ex.repetitions),
        sets: parseInt(ex.sets),
        equipment: ex.equipment,
      });
    });

    const createdExercises = await Promise.all(exercisePromises);

    savedWorkouts.push({
      ...workout.toJSON(),
      exercises: createdExercises,
    });
  }
  return savedWorkouts;
};
