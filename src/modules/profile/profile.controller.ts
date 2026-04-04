import type { Request, Response } from 'express';

export default class ProfileController {
  getProfile(_req: Request, res: Response) {
    res.send("returns logged in data");
  }

  updateProfile(_req: Request, res: Response) {
    res.send("updates profile data");
  }
}
