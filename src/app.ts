import express, { type Express } from 'express';

// routes
import authRouter from './modules/auth/auth.router.js';

// Initialize the app
const app: Express = express();
app.use(express.json());

// Test route
app.get('/test', (_req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1/auth', authRouter);

export default app;