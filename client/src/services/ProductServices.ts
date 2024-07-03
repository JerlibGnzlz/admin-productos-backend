import { safeParse } from 'valibot';
import { DraftProductSchema, ProductsSchema, Product, ProductSchema, ProductSchemaZod } from "../types";
import axios from "axios";
import { toBoolean } from '../utils';




type ProductData = {
    [k: string]: FormDataEntryValue;
}


export const addProduct = async (data: ProductData) => {

    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        })
        console.log(result);
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products`
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })

        } else {
            throw new Error("Datos no Validos")
        }
    } catch (error) {
        console.log(error)
    }
}


export const getProducts = async () => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`
        const { data } = await axios(url)
        const result = safeParse(ProductsSchema, data.data)
        if (result.success) {
            return result.output
        } else {
            throw new Error("Hubo un error")
        }
    } catch (error) {
        console.log(error)
    }
}

export const getProductsById = async (id: Product["id"]) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        const { data } = await axios(url)
        const result = safeParse(ProductSchema, data.data)
        if (result.success) {
            return result.output
        } else {
            throw new Error("Hubo un error")
        }
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (data: ProductData, id: number) => {

    try {
        const result = ProductSchemaZod.parse({
            id,
            name: data.name,
            price: Number(data.price),
            active: toBoolean(data.active.toString())
        })
        console.log(result)
        if (result) {
            const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
            await axios.put(url, data)

            return result
        } else {
            throw new Error("Hubo un error")
        }
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (id: Product["id"]) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        await axios.delete(url)
    } catch (error) {
        console.log(error)
    }
}

export const updateProductActive = async (id: Product["id"]) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        await axios.patch(url)
        // const updateData = { active };
        // ProductSchemaZod.pick({ active: true }).parse(updateData);

    } catch (error) {
        console.log(error)
    }
}