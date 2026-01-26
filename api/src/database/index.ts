import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import { User } from '../models/User';
import { Plan } from '../models/Plan';
import { Diet } from '../models/Diet';
import { Recipe } from '../models/Recipe';
import { Workout } from '../models/Workout';
import { Exercise } from '../models/Exercise';

dotenv.config();

export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT) || 3306,
  models: [User, Plan, Diet, Recipe, Workout, Exercise],
  logging: false,
});
