import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';



export const handleError = (req: Request, res: Response, next: NextFunction) => {
    let error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }
    next()
}