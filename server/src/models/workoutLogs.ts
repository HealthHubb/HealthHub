import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import WorkoutRoutine from './WorkoutRoutine.js';
import User from './User.js';

class WorkoutLogs extends Model {
    public id!: number;
    public workoutRoutineId!: number;
    public userId!: number;
    public executedAt!: Date;
    public actualWeight!: number;
    public notes!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

WorkoutLogs.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        workoutRoutineId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: WorkoutRoutine,
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        executedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        actualWeight: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'workout_logs',
    },
);

export default WorkoutLogs; 