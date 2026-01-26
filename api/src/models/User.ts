import {
  Column,
  CreatedAt,
  DataType,
  HasOne,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Plan } from './Plan';

@Table
export class User extends Model<User> {
  @Column
  name: string;

  @Column(DataType.STRING(100))
  email: string;

  @Column(DataType.VIRTUAL)
  password: string;

  @Column
  passwordHash: string;

  @Column
  goal: string;

  @Column
  days_per_week: number;

  @Column
  session_duration: number;

  @Column
  health_conditions: string;

  @Column
  dietary_restrictions: string;

  @Column
  daily_activity_level: 'sedentary' | 'light' | 'moderate' | 'active';

  @Column
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';

  @Column
  current_weight: number;

  @Column
  target_weight: number;

  @Column
  lang: 'en' | 'es' | 'tr';

  @Column
  height: number;

  @Column(DataType.JSON)
  imc: any;

  @Column
  gender: 'male' | 'female' | 'other';

  @Column
  age: number;

  @Column
  bmr: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasOne(() => Plan)
  plan: Plan;
}
