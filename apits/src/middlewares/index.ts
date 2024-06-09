import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';



export const handleError = (req: Request, res: Response, next: NextFunction) => {
    let erros = validationResult(req)
    if (!erros.isEmpty()) {
        return res.status(400).json({ erros: erros.array() })
    }
    next()
}