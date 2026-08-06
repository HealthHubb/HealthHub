import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './User.js';

@Table({
    tableName: 'connections',
    timestamps: true
})
class Connection extends Model {
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
    declare professionalId: number;

    @BelongsTo(() => User, 'professionalId')
    declare professional: User;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    declare clientId: number;

    @BelongsTo(() => User, 'clientId')
    declare client: User;

    @Column({
        type: DataType.ENUM('PENDING', 'ACCEPTED', 'REJECTED'),
        allowNull: false,
        defaultValue: 'PENDING',
    })
    declare status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
}

export default Connection;