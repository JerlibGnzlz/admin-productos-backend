import { safeParse } from 'valibot';
import { DraftProductSchema, ProductsSchema, Product, ProductSchema } from "../types";
import axios from "axios";



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

export const updateProduct = async (id: Product["id"], data: ProductData) => {
    // try {
    //     const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
    //     const { data } = await axios(url)
    //     const result = safeParse(ProductSchema, data.data)
    //     if (result.success) {
    //         return result.output
    //     } else {
    //         throw new Error("Hubo un error")
    //     }
    // } catch (error) {
    //     console.log(error)
    // }
}