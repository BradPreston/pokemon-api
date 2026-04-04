import type { Request, Response } from "express";

export default class AdminController {
  lockAccount(_req: Request, res: Response) {
    res.send("force locks account");
  }

  unlockAccount(_req: Request, res: Response) {
    res.send("unlocks an account");
  }
}
