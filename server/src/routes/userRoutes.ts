import type { FastifyInstance } from 'fastify';
import UserController from '../controllers/UserController.js';
import type { UpdateUserBody } from '../controllers/UserController.js';
import { authenticate } from '../middlewares/authenticate.js';

export async function userRoutes(fastify: FastifyInstance) {
    fastify.post('/users', UserController.createUser);
    fastify.get('/users', { onRequest: [authenticate] }, UserController.getUsers);
    fastify.get<{ Params: { id: string } }>('/users/:id', { onRequest: [authenticate] }, UserController.getUserById);
    fastify.put<{ Params: { id: string }, Body: UpdateUserBody }>('/users/:id', { onRequest: [authenticate] }, UserController.updateUser);
    fastify.delete<{ Params: { id: string } }>('/users/:id', { onRequest: [authenticate] }, UserController.deleteUser);
}