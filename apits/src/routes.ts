import { Router } from "express";
import { body, param } from "express-validator"
import { allProduct, createProduct, deleteProducts, getProductById, updateActive, updateProduct } from "./handlers/products";
import { handleError } from "./middlewares";

const router = Router()
/**
 * @swagger
 * components:
 *      schemas:
 *         Product: 
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: the Product ID
 *                      example: 1 
 *                  name: 
 *                       type: string
 *                       description: the Product name
 *                       example: Monitor Curvo 
 *                  price:
 *                      type: number
 *                      description: the Product price
 *                      example: 2000 
 *                  active:
 *                      type: boolean
 *                      description: the Product active
 *                      example: true 
 */



/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get a list of products
 *     responses:
 *       200:
 *        description: Successful response
 * 
 *
 */
// /**


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
    param("id")
        .isInt().withMessage("Id no valido"),
    body("name").notEmpty().withMessage("El nombre del producto no puede estar vacio"),
    body("price")
        .notEmpty().withMessage("Valor no valido")
        .isNumeric().withMessage("El precio del producto no puede ir vacio")
        .custom(value => value > 0).withMessage("Precio no valido"),
    body("active").isBoolean().withMessage("Valor para disponibilidad no valido"),
    handleError,
    updateProduct
)

router.patch("/:id",
    param("id")
        .isInt().withMessage("Id no valido"),
    handleError,
    updateActive)

router.delete("/:id",
    param("id")
        .isInt().withMessage("Id no valido"),
    handleError,
    deleteProducts
)



export default router