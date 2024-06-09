import { Router } from "express";
import { createProduct } from "./handlers/products";

const router = Router()


router.get("/", (req, res) => {
    res.json({ message: "desde thunder" })
})


router.post("/", createProduct)

export default router