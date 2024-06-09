import { Request, Response } from "express"
import Product from "../models/ProductModel"

export const createProduct = async (req: Request, res: Response) => {

    try {
        const product = await Product.create(req.body)
        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
}


export const allProduct = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            attributes: { exclude: ["createdAt", "updatedAt", "active"] }
        })

        res.json({ data: products })
    } catch (error) {
        console.log(error)
    }
}


export const getProductById = async (req: Request, res: Response) => {

    const { id } = req.params
    try {

        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" })
        } else {
            return res.json({ data: product })
        }
    } catch (error) {
        console.log(error)
    }
}



