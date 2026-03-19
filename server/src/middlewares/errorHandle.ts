import type { FastifyError, FastifyRequest, FastifyReply } from 'fastify';
import { AppError } from '../errors/AppError.js'; 

export const errorHandler = (
    err: FastifyError,
    req: FastifyRequest,
    res: FastifyReply
) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).send({
            status: 'error',
            message: err.message,
        });
    }

    if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).send({
            status: 'error',
            message: err.message,
            details: (err as any).errors.map((error: any) => error.message),
        });
    }

    console.error('Error:', err);

    return res.status(500).send({
        status: 'error',
        message: 'Internal server error',
    });
}