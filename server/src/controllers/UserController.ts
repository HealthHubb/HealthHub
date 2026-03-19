import type { FastifyRequest, FastifyReply } from 'fastify';
import User from '../models/User.js';
import { AppError } from '../errors/AppError.js';

interface CreateUserBody {
    name: string;
    email: string;
    password: string;
    role: 'CLIENT' | 'PROFESSIONAL';
}

export const createUser = async (request: FastifyRequest<{ Body: CreateUserBody }>, reply: FastifyReply) => {
    try {
        const { name, email, password, role } = request.body as CreateUserBody;

        if (!name || !email || !password || !role) {
            throw new AppError('All fields are required', 400);
        }

        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            throw new AppError('Email already exists', 400);
        }

        const newUser = await User.create({ name, email, password, role });

        trp
    } catch (error) {
        console.error('Error creating user:', error);
        throw new AppError('Internal server error', 500);
    }
}