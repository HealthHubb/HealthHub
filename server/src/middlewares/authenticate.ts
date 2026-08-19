import { type FastifyReply, type FastifyRequest } from "fastify";

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    await request.jwtVerify();
  } catch (err) {
    return reply
      .status(401)
      .send({ message: "Token de autenticação inválido ou ausente." });
  }
}
