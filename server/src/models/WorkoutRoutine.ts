import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Exercise from './Exercise.js';
import Workouts from './Workouts.js';

class WorkoutRoutine extends Model {
    public id!: number;
    public workoutId!: number;
    public exerciseId!: number;
    public sets!: number;
    public reps!: number;
    public restTime!: number;
 
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

WorkoutRoutine.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        workoutId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Workouts,
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        exerciseId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Exercise,
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        sets: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        reps: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        restTime: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'workout_routine',
    },
);

export default WorkoutRoutine;