import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Diet from './Diet.js';

class Meals extends Model {
    public id!: number;
    public dietId!: number;
    public timeOfDay!: string;
    public description!: string;
    public targetCalories!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Meals.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        dietId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Diet,
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        timeOfDay: {
            type: DataTypes.ENUM('BREAKFAST', 'LUNCH', 'DINNER', 'SNACK'),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        targetCalories: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'meals',
    }
);

export default Meals;