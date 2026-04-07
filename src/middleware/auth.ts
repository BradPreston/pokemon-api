import type { NextFunction, Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MiddlewareResponse = Response<any, Record<string, any>>;

export default class AuthMiddleware {
	validateSession(
		req: Request,
		res: Response,
		next: NextFunction,
	): MiddlewareResponse | undefined {
		if (!req.session.userId) {
			return res.status(401).json({
				message: "You must be logged in to view this route",
			});
		}
		next();
	}
}
