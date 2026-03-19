import Fastify from "fastify";
import sequelize from "./config/database.js";
import ClientProfile from "./models/ClientProfile.js";
import ProfessionalProfile from "./models/ProfessionalProfile.js";
import User from "./models/User.js";
import Connection from "./models/Connection.js";
import { userRoutes } from "./routes/userRoutes.js";

const app = Fastify({
  logger: true,
});

app.get("/ping", async (request, reply) => {
  return { status: "ok", message: "healthhub server is running" };
});

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    await User.sync();
    await ClientProfile.sync();
    await ProfessionalProfile.sync();
    await Connection.sync();
    console.log("Database & tables created!");

    await app.register(userRoutes);

    await app.listen({ port: 3333, host: "0.0.0.0" });
    console.log("Server is running on port 3333");

  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

start();
