import type { FastifyRequest, FastifyReply } from 'fastify';
import User from '../models/User.js';
import { AppError } from '../errors/AppError.js';

interface CreateUserBody {
    name: string;
    email: string;
    password: string;
    role: 'CLIENT' | 'PROFESSIONAL';
}

interface UpdateUserBody {
    name?: string;
    email?: string;
    password?: string;
    role?: 'CLIENT' | 'PROFESSIONAL';
}

class UserController {
    async createUser(request: FastifyRequest, reply: FastifyReply) {
        const { name, email, password, role } = request.body as CreateUserBody;

        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            throw new AppError('User already exists', 400);
        }

        const newUser = await User.create({ name, email, password, role });

        return reply.status(201).send(newUser);
    } 

    async getUsers(request: FastifyRequest, reply: FastifyReply) {
        const users = await User.findAll({
            attributes: { exclude: ['password'] },
        });

        return reply.status(200).send(users);
    }

    async getUserById(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        const { id } = request.params;

        const user = await User.findByPk(id, {
            attributes: { exclude: ['password'] },
        });

        if (!user) {
            throw new AppError('User not found', 404);
        }

        return reply.status(200).send(user);
    }

    async updateUser(request: FastifyRequest<{ Params: { id: string }, Body: UpdateUserBody }>, reply: FastifyReply) {
        const { id } = request.params;

        const updateData = request.body as UpdateUserBody;

        const user = await User.findByPk(id);

        if (!user) {
            throw new AppError('User not found', 404);
        }

        await user.update(updateData);

        const userUpdated = await User.findByPk(id, {
            attributes: { exclude: ['password'] },
        });

        return reply.status(200).send(userUpdated);
    }

    async deleteUser(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        const { id } = request.params;

        const user = await User.findByPk(id);

        if (!user) {
            throw new AppError('User not found', 404);
        }

        await user.destroy();

        return reply.status(204).send();
    }
}

export default new UserController();
