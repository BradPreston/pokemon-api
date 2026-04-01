import express, { type Express } from 'express';
import env from './config/env.js';

// Initialize the app
const app: Express = express();

// Test route
app.get('/test', (_req, res) => {
    res.send('Hello World!');
});

export default app;