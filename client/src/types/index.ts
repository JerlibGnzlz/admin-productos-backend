import { boolean, number, object, string, array, Output } from 'valibot';


export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    active: boolean(),
})
export type Product = Output<typeof ProductSchema>

export const ProductsSchema = array(ProductSchema)
