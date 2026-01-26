import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Diet } from './Diet';

@Table
export class Recipe extends Model<Recipe> {
  @Column
  meal: string;

  @Column
  name: string;

  @Column(DataType.JSON)
  ingredients: any;

  @Column
  calories: number;

  @ForeignKey(() => Diet)
  @Column
  dietId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => Diet)
  diet: Diet;
}
