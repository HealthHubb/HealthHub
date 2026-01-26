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
import { Exercise } from './Exercise';

@Table
export class Workout extends Model<Workout> {
  @Column
  day: string;

  @Column
  plan_duration_weeks: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @ForeignKey(() => Plan)
  @Column
  planId: number;

  @BelongsTo(() => Plan)
  plan: Plan;

  @HasMany(() => Exercise)
  exercises: Exercise[];
}
