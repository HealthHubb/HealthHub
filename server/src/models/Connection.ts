import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';

class Connection extends Model {
    public id!: number;
    public professionalId!: number;
    public clientId!: number;
    public status!: 'PENDING' | 'ACCEPTED' | 'REJECTED';

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Connection.init(
    {
        id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
        professionalId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        clientId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        status: {
            type: DataTypes.ENUM('PENDING', 'ACCEPTED', 'REJECTED'),
            allowNull: false,
            defaultValue: 'PENDING',
        },
    },
    {
        sequelize,
        tableName: 'connections',
    }
);

export default Connection;