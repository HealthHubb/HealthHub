import type { FastifyInstance } from 'fastify';
import { createUser } from '../controllers/UserController.js';

export async function userRoutes(fastify: FastifyInstance) {
    fastify.post('/users', createUser);
}