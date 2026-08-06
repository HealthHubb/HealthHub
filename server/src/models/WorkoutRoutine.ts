import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Exercise from './Exercise.js';
import Workouts from './Workouts.js';

@Table({
    tableName: 'workout_routine',
    timestamps: true
})
class WorkoutRoutine extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @ForeignKey(() => Workouts)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    declare workoutId: number;

    @BelongsTo(() => Workouts)
    declare workout: Workouts;

    @ForeignKey(() => Exercise)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    declare exerciseId: number;

    @BelongsTo(() => Exercise)
    declare exercise: Exercise;

    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
    })
    declare sets: number;

    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
    })
    declare reps: number;

    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
    })
    declare restTime: number;
}

export default WorkoutRoutine;