import express from 'express';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

const app = express();
app.use(express.json());

// Example route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

export default app;
