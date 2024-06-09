import { Router } from "express";
import { body, param } from "express-validator"
import { allProduct, createProduct, getProductById, updateActive, updateProduct } from "./handlers/products";
import { handleError } from "./middlewares";

const router = Router()


router.get("/", allProduct)

router.get("/:id",
    param("id")
        .isInt().withMessage("Id no valido"),
    handleError,
    getProductById
)


router.post("/",
    body("name").notEmpty().withMessage("El nombre del producto no puede estar vacio"),
    body("price")
        .notEmpty().withMessage("Valor no valido")
        .isNumeric().withMessage("El precio del producto no puede ir vacio")
        .custom(value => value > 0).withMessage("Precio no valido"),
    handleError,
    createProduct
)

router.put("/:id",
    body("name").notEmpty().withMessage("El nombre del producto no puede estar vacio"),
    body("price")
        .notEmpty().withMessage("Valor no valido")
        .isNumeric().withMessage("El precio del producto no puede ir vacio")
        .custom(value => value > 0).withMessage("Precio no valido"),
    body("active").isBoolean().withMessage("Valor para disponibilidad no valido"),
    handleError,
    updateProduct
)

router.patch("/:id", updateActive)

export default router