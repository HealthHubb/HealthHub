import type { FastifyInstance } from "fastify";
import { AuthController } from "../controllers/AuthController.js";
import { authenticate } from "../middlewares/authenticate.js";

export async function authRoutes(fastify: FastifyInstance) {
  const authController = new AuthController();

  fastify.post("/register", authController.register);
  fastify.post("/login", authController.login);
  fastify.get("/me", { preHandler: [authenticate] }, authController.me);
}
