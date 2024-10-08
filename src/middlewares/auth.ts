import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const claim = jwt.verify(token, process.env.JWT_SECRET as string);
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};
