import { Request, Response } from "express"

export const createProduct = (req: Request, res: Response) => {
    res.json({ message: "desde post" })
}