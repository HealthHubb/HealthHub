import {
  BelongsTo,
  Column,
  CreatedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Workout } from './Workout';

@Table
export class Exercise extends Model<Exercise> {
  @ForeignKey(() => Workout)
  @Column
  workoutId: number;

  @Column
  name: string;

  @Column
  duration: number;

  @Column
  repetitions: number;

  @Column
  sets: number;

  @Column
  equipment: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => Workout)
  workout: Workout;
}
