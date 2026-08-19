import { type FastifyReply, type FastifyRequest } from "fastify";
import bcrypt from "bcrypt";
import User from "../models/User.js";

export class AuthController {
  async register(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password, role } = request.body as {
      name: string;
      email: string;
      password: string;
      role?: string;
    };

    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return reply.status(400).send({ message: "E-mail já cadastrado." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "CLIENT",
    });

    return reply.status(201).send({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }

  async login(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as {
      email: string;
      password: string;
    };

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return reply.status(401).send({ message: "E-mail ou senha inválidos." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return reply.status(401).send({ message: "E-mail ou senha inválidos." });
    }

    const token = await reply.jwtSign(
      {
        id: user.id,
        role: user.role,
      },
      {
        expiresIn: "7d",
      },
    );

    return reply.send({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  }

  async me(request: FastifyRequest, reply: FastifyReply) {
    const userId = request.user.id;

    const user = await User.findByPk(userId, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return reply.status(404).send({ message: "Usuário não encontrado." });
    }

    return reply.send(user);
  }
}
