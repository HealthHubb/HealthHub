import Fastify from "fastify";
import { errorHandler } from "./middlewares/errorHandle.js";
import { userRoutes } from "./routes/userRoutes.js";

const app = Fastify({ logger: true });

app.register(userRoutes);

app.setErrorHandler(errorHandler);

export default app;
