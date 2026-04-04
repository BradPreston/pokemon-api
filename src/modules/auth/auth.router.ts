import express, { type Router } from 'express';
import AuthController from './auth.controller.js';
const authRouter: Router = express.Router();

const controller = new AuthController();

authRouter.post('/register', controller.register.bind(controller));

export default authRouter;