import type { FastifyInstance } from 'fastify';
import UserController from '../controllers/UserController.js';

export async function userRoutes(fastify: FastifyInstance) {
    fastify.post('/users', UserController.createUser);
    fastify.get('/users', UserController.getUsers);
    fastify.get('/users/:id', UserController.getUserById);
    fastify.put('/users/:id', UserController.updateUser);
    fastify.delete('/users/:id', UserController.deleteUser);
}