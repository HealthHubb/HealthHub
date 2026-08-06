import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './User.js';

@Table({
    tableName: 'professional_profiles',
    timestamps: true
})
class ProfessionalProfile extends Model {
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
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    declare certificate: string;

    @Column({
        type: DataType.ENUM('PERSONAL_TRAINER', 'NUTRITIONIST'),
        allowNull: false,
    })
    declare professionalType: 'PERSONAL_TRAINER' | 'NUTRITIONIST';

    @Column({
        type: DataType.JSON,
        allowNull: false,
    })
    declare specialities: string[];

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    declare bio: string;
}

export default ProfessionalProfile;