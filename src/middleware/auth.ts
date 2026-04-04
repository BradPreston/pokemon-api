import type { NextFunction, Request, Response } from "express";

export default class AuthMiddleware {
    validateSession(req: Request, res: Response, next: NextFunction) {
        if (!req.session.userId) {
            return res.status(401).json({
                message: 'You must be logged in to view this route'
            });
        }
        next();
    }
}