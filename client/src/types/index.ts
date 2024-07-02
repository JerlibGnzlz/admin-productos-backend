import { boolean, number, object, string, array, Output } from 'valibot';
import { z } from 'zod';

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

export const ProductSchemaZod = z.object({
    id: z.number(),
    name: z.string(),
    price: z.coerce.number(),
    active: z.boolean(),
})


export type Product = Output<typeof ProductSchema>

export const ProductsSchema = array(ProductSchema)
