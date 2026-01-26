import { Router } from "express";
import userRoutes from "./routes/userRoutes";
import workoutRoutes from "./routes/workoutRoutes";
import planRoutes from "./routes/planRoutes";
import exerciseRoutes from "./routes/exerciseRoutes";

const routes = Router();

routes.use('/', userRoutes);
routes.use('/', workoutRoutes);
routes.use('/', planRoutes);
routes.use('/', exerciseRoutes);

export default routes;