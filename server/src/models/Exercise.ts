import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'exercise',
    timestamps: true
})
class Exercise extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare muscleGroup: string;
}

export default Exercise;