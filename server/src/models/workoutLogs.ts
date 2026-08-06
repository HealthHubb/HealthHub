import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import WorkoutRoutine from './WorkoutRoutine.js';
import User from './User.js';

@Table({
    tableName: 'workout_logs',
    timestamps: true
})
class WorkoutLogs extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @ForeignKey(() => WorkoutRoutine)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    declare workoutRoutineId: number;

    @BelongsTo(() => WorkoutRoutine)
    declare workoutRoutine: WorkoutRoutine;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    declare userId: number;

    @BelongsTo(() => User)
    declare user: User;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    declare executedAt: Date;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    declare actualWeight: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare notes: string;
}

export default WorkoutLogs;