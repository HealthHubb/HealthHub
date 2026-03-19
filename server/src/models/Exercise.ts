import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Exercise extends Model {
    public id!: number;
    public name!: string;
    public muscleGroup!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Exercise.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        muscleGroup: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'exercise',
    }
);

export default Exercise;