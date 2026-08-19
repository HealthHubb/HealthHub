import 'reflect-metadata';
import Fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import sequelize from "./config/database.js";
import ClientProfile from "./models/ClientProfile.js";
import ProfessionalProfile from "./models/ProfessionalProfile.js";
import User from "./models/User.js";
import Connection from "./models/Connection.js";
import Diet from "./models/Diet.js";
import Meals from "./models/Meals.js";
import Exercise from "./models/Exercise.js";
import Workouts from "./models/Workouts.js";
import WorkoutRoutine from "./models/WorkoutRoutine.js";
import WorkoutLogs from "./models/workoutLogs.js";
import { userRoutes } from "./routes/userRoutes.js";
import dotenv from "dotenv";
import { authRoutes } from './routes/authRotutes.js';

dotenv.config();

const app = Fastify({
  logger: true,
});

app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || 'supersecret'
});

app.register(authRoutes, { prefix: '/auth' });

app.get("/ping", async (request, reply) => {
  return { status: "ok", message: "healthhub server is running" };
});

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    sequelize.addModels([
      User, 
      ClientProfile, 
      ProfessionalProfile, 
      Connection, 
      Diet, 
      Meals, 
      Exercise, 
      Workouts, 
      WorkoutRoutine, 
      WorkoutLogs
    ]);

    await sequelize.sync();
    console.log("Database & tables created!");

    await app.register(userRoutes);

    await app.listen({ port: 3333, host: "0.0.0.0" });
    console.log("Server is running on port 3333");

  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

export {app};

start();
