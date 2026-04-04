import type { Request, Response } from 'express';

export default class EmailController {
  sendVerificationEmail(_req: Request, res: Response) {
    res.send("emails customer a verification link");
  }

  verifyEmail(_req: Request, res: Response) {
    res.send("confirm the token and mark account verified");
  }
}
