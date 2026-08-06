import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Diet from './Diet.js';

@Table({
    tableName: 'meals',
    timestamps: true
})
class Meals extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @ForeignKey(() => Diet)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    declare dietId: number;

    @BelongsTo(() => Diet)
    declare diet: Diet;

    @Column({
        type: DataType.ENUM('BREAKFAST', 'LUNCH', 'DINNER', 'SNACK'),
        allowNull: false,
    })
    declare timeOfDay: 'BREAKFAST' | 'LUNCH' | 'DINNER' | 'SNACK';

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare description: string;

    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
    })
    declare targetCalories: number;
}

export default Meals;