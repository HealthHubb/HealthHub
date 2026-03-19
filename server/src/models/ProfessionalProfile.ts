import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';

class ProfessionalProfile extends Model {
    public id!: number;
    public userId!: number;
    public certificate!: string;
    public professionalType!: 'PERSONAL_TRAINER' | 'NUTRITIONIST';
    public specialities!: string[];
    public bio!: string;
}

ProfessionalProfile.init(
    {
        id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
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
        certificate: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        professionalType: {
            type: DataTypes.ENUM('PERSONAL_TRAINER', 'NUTRITIONIST'),
            allowNull: false,
        },
        specialities: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'professional_profiles',
    }   
);

export default ProfessionalProfile;