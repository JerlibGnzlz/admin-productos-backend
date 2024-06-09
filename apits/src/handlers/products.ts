import { Request, Response } from "express"
import Product from "../models/ProductModel"


export const createProduct = async (req: Request, res: Response) => {

    try {
        const product = new Product(req.body)
        await product.save()
        res.status(201)
    } catch (error) {
        console.log(error)
    }
}