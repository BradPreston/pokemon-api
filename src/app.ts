import express, { type Express } from 'express';
import sessions from 'express-session';
import env from './config/env.js';

// middleware
import AuthMiddleware from './middleware/auth.js';
const authMiddleware = new AuthMiddleware();

// routes
import authRouter from './modules/auth/auth.router.js';

// Initialize the app
const app: Express = express();
app.use(sessions({
    secret: env.JWT_SECRET,
    saveUninitialized: false,
    resave: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/test', (req, res, next) => {
    authMiddleware.validateSession(req, res, next)
    res.send('Hello World!');
});

app.use('/api/v1/auth', authRouter);

export default app;