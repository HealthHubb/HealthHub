import { type FastifyInstance } from "fastify";
import { AuthController } from "../controllers/AuthController.js";
import { authenticate } from "../middlewares/authenticate.js";

export async function authRoutes(app: FastifyInstance) {
  const authController = new AuthController();

  app.post("/register", authController.register);
  app.post("/login", authController.login);
  app.get("/me", { onRequest: [authenticate] }, authController.me);
}
