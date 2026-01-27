import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
    status: number

    constructor(message: string, status: number) {
        super(message);
        this.status = status
    }
}

export const errorHandler = (
    error: Error | AppError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    console.error(error.stack);

    const status = error instanceof AppError ? error.status : 500
    const message = error instanceof AppError ? error.message : 'Internal server error'

    res.status(status).json({ message });
};

