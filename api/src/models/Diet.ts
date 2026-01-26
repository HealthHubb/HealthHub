import {
  BelongsTo,
  Column,
  CreatedAt,
  ForeignKey,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Plan } from './Plan';
import { User } from './User';
import { Recipe } from './Recipe';

@Table
export class Diet extends Model<Diet> {

  @Column
  calories_per_day: number;

  @CreatedAt
  createdAt: Date;
  
  @UpdatedAt
  updatedAt: Date;

  @ForeignKey(() => Plan)
  @Column
  planId: number;

  @BelongsTo(() => Plan)
  plan: Plan;

  @HasMany(() => Recipe)
  recipes: Recipe[];
}
