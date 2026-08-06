import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './User.js';

@Table({
    tableName: 'client_profiles',
    timestamps: true
})
class ClientProfile extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

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
    declare birthDate: Date;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    declare weight: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    declare height: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare gender: string;

    @Column({
        type: DataType.ENUM('SEDENTARY', 'LIGHT', 'MODERATE', 'HIGH', 'VERY_HIGH'),
        allowNull: false,
    })
    declare activityLevel: string;

    @Column({
        type: DataType.ENUM('WEIGHT_LOSS', 'WEIGHT_GAIN', 'MAINTENANCE', 'HEALTH'),
        allowNull: false,
    })
    declare goal: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    declare notes: string;
}

export default ClientProfile;
