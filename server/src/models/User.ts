import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'users',
    timestamps: true
})
class User extends Model {
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
        unique: true,
    })
    declare email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare password: string;

    @Column({
        type: DataType.ENUM('CLIENT', 'PROFESSIONAL'),
        allowNull: false,
        defaultValue: 'CLIENT',
    })
    declare role: 'CLIENT' | 'PROFESSIONAL';

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare phone: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare address: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true,
    })
    declare document: string;
}

export default User;
