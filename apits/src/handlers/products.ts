import { Request, Response } from "express"
import Product from "../models/ProductModel"
import { body } from 'express-validator';
import { where } from "sequelize";

export const createProduct = async (req: Request, res: Response) => {

    const product = await Product.create(req.body)
    res.status(201).json({ data: product })
}


export const allProduct = async (req: Request, res: Response) => {
    const products = await Product.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] }
    })

    res.json({ data: products })
}


export const getProductById = async (req: Request, res: Response) => {

    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" })
    } else {
        return res.json({ data: product })
    }

}

export const updateProduct = async (req: Request, res: Response) => {

    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" })
    } else {
        await product.update(req.body)
        return res.json({ data: product })
    }

}

export const updateActive = async (req: Request, res: Response) => {

    const { id } = req.params
    const product = await Product.findByPk(id)


    if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" })
    }

    product.active = !product.dataValues.active
    await product.save()
    res.json({ data: product })
}

export const deleteProducts = async (req: Request, res: Response) => {

    const { id } = req.params
    const product = await Product.findByPk(id)


    if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" })
    }

    await product.destroy()
    res.json({ data: "Producto eliminado" })
}




