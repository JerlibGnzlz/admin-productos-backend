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
 *  /api/products:
 *   get:
 *     summary: Get a list of products
 *     tags:
 *        - Products
 *     description: Return a list of products
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Product'  
 */

router.get("/", allProduct)


/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *      summary: Get a product by ID
 *      tags:
 *          - Products
 *      description: Return a product
 *      parameters:
 *        - in: path
 *          name: id
 *          description: the Id of the product
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Succesful Response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product' 
 *          404:
 *              description: Not found
 *          400:
 *              description: Bad Request - Invalid ID 
 */


router.get("/:id",
    param("id")
        .isInt().withMessage("Id no valido"),
    handleError,
    getProductById
)


/**
 * @swagger
 * /api/products/:
 *  post:
 *      summary: Create a product
 *      tags:
 *          - Products
 *      description: Return a new product
 *      requestBody:
 *          required: true
 *          content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties: 
 *                              name:       
 *                                  type: string
 *                                  example: "Monitor Curvo 40"
 *                              price:
 *                                  type: integer
 *                                  example: "10000"
 *      responses:
 *          201:
 *              description: Product create sussceful
 *          400:
 *              description: Bad Request
 * 
 * 
 */

router.post("/",
    body("name").notEmpty().withMessage("El nombre del producto no puede estar vacio"),
    body("price")
        .notEmpty().withMessage("Valor no valido")
        .isNumeric().withMessage("El precio del producto no puede ir vacio")
        .custom(value => value > 0).withMessage("Precio no valido"),
    handleError,
    createProduct
)

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *      summary: Update a product with input
 *      tags:
 *          - Products
 *      description: Update a product
 *      parameters:
 *        - in: path
 *          name: id
 *          description: the Id of the product
 *          required: true
 *          schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties: 
 *                              name:       
 *                                  type: string
 *                                  example: "Monitor Curvo 40"
 *                              price:
 *                                  type: integer
 *                                  example: "10000"
 *                              active:
 *                                  type: boolean
 *                                  example: true
 *      responses:
 *          200:
 *              description: Succesful Response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product' 
 *          400:
 *              description: Bad Request
 *          404:
 *              description: Not Found
 * 
 * 
 */


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


/**
 * @swagger
 *  /api/products/{id}:
 *  patch:
 *      summary: Update product active
 *      tags:
 *         - Products
 *      description: Return a product active
 *      parameters:
 *        - in: path
 *          name: id
 *          description: the Id of the product
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Succesful Response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product' 
 *          400:
 *              description: Bad Request
 *          404:
 *              description: Not Found
 * 
 */

router.patch("/:id",
    param("id")
        .isInt().withMessage("Id no valido"),
    handleError,
    updateActive)



/**
 * @swagger
 *  /api/products/{id}:
 *  delete:
 *      summary: Delete product 
 *      tags:
 *         - Products
 *      description: Delete a product 
 *      parameters:
 *        - in: path
 *          name: id
 *          description: the Id of the product
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Succesful Response
 *              content:
 *                  application/json:
 *                      schema:
 *                         type:
 *                         value: "Producto Eliminado"
 *          400:
 *              description: Bad Request
 *          404:
 *              description: Not Found
 * 
 */


router.delete("/:id",
    param("id")
        .isInt().withMessage("Id no valido"),
    handleError,
    deleteProducts
)



export default router