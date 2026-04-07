import type { Request, Response } from "express";

export default class EmailController {
	sendVerificationEmail(_req: Request, res: Response): void {
		res.send("emails customer a verification link");
	}

	verifyEmail(_req: Request, res: Response): void {
		res.send("confirm the token and mark account verified");
	}
}
