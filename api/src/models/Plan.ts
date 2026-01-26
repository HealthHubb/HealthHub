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
import { User } from './User';
import { Workout } from './Workout';
import { Diet } from './Diet';

@Table
export class Plan extends Model<Plan> {
  @Column
  duration: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Workout)
  workouts: Workout[];

  @HasMany(() => Diet)
  diets: Diet[];
}
