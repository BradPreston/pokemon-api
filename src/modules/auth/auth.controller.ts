import type { Request, Response } from "express";
import AuthService from "./auth.service.js";
import { UserInsertSchema } from "../../config/db/schema/users.js";
import BaseController from "../../common/BaseController.js";

const service = new AuthService();

export default class AuthController extends BaseController {
  constructor() {
    super();
  }

  async register(req: Request, res: Response) {
    const parsed = this.parseOrThrow<typeof UserInsertSchema>(req, res, UserInsertSchema);
    if (!parsed) return;
    const hashedPassword = await this.hashPassword(parsed.data.password);
    const userId = await service.createUser({...parsed.data, password: hashedPassword });
    // TODO: add logging to show user ID that was created
    res.status(200).json({
      message: 'User inserted successfully',
      data: {
        user_id: userId
      }
    })
  }

  login(_req: Request, res: Response) {
    res.send("user login");
  }

  logout(_req: Request, res: Response) {
    res.send("user logout");
  }

  refreshToken(_req: Request, res: Response) {
    res.send("refresh an auth token");
  }

  revokeToken(_req: Request, res: Response) {
    res.send("revokes an auth token");
  }

  forgotPassword(_req: Request, res: Response) {
    res.send("generates a limited time reset token");
  }

  resetPassword(_req: Request, res: Response) {
    res.send("validates a reset token and saves password");
  }

  changePassword(_req: Request, res: Response) {
    res.send("logged in user changes password");
  }
}
