import request from "supertest";
import { server } from "../../server";

describe("POST /api/products", () => {
    it('Should validated errors', async () => {
        const response = await request(server).post("/api/products").send()
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty("error")
        expect(response.body.error).toHaveLength(4)
        expect(response.badRequest).toBe(true)
        expect(response.body.error).not.toHaveProperty("error")
    });

    it('Should validated that price is > 0', async () => {
        const response = await request(server).post("/api/products").send({
            "name": "tv desde testing",
            "price": 0,
        })
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty("error")
        expect(response.body.error).not.toHaveLength(2)
    });

    it('Should create product', async () => {
        const response = await request(server).post("/api/products").send({
            "name": "tv desde testing",
            "price": 100,
            "active": true
        })
        expect(response.status).toEqual(201)
        expect(response.body).toHaveProperty("data")
        expect(response.status).not.toEqual(400)
        expect(response.body).not.toHaveProperty("error")
    });
})


describe("GET /api/products", () => {

    it('should check if /api exist', async () => {
        const response = await request(server).get("/api/products")
        expect(response.status).not.toBe(404)
    });

    it('should get all products', async () => {
        const response = await request(server).get("/api/products")
        expect(response.status).toBe(200)
        expect(response.headers["content-type"]).toMatch(/json/)
        expect(response.body).toHaveProperty("data")
        expect(response.body).not.toHaveProperty("error")
        expect(response.status).not.toBe(404)
    });
})

describe("GET /api/products/:id", () => {

    it('should return a 404 response for no exist', async () => {
        const productId = 200
        const response = await request(server).get(`/api/products/${productId}`)
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty("error")
        expect(response.body.error).toBe("Producto no encontrado")
    });

    it('should check a valid ID in the URL', async () => {
        const productId = 1
        const response = await request(server).get(`/api/products/no-validate`)
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("error")
        expect(response.body.error).toHaveLength(1)
        expect(response.body.error[0].msg).toBe("Id no valido")
    });

    it('should a single product', async () => {
        const response = await request(server).get(`/api/products/1`)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("data")
    });
})


describe("PUT /api/products/:id", () => {
    it('should check a valid ID in the URL', async () => {
        const response = await request(server).put(`/api/products/no-validate`).send({
            name: "smart tv",
            price: 300,
            active: true,
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("error")
        expect(response.body.error).toHaveLength(1)
        expect(response.body.error[0].msg).toBe("Id no valido")
    });


    it('should validate message error when update product ', async () => {
        const response = await request(server).put(`/api/products/1`).send({})
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("error")
        expect(response.body.error).toHaveLength(5)
        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty("data")
    });

    it('should validate that price is > 0 ', async () => {
        const response = await request(server).put(`/api/products/1`).send({
            name: "smart tv",
            price: 0,
            active: true,
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("error")
        expect(response.body.error).toHaveLength(1)
        expect(response.body.error[0].msg).toEqual("Precio no valido")
        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty("data")
    });

    it('should return a 404 response for not exist product', async () => {
        const productId = 200
        const response = await request(server).put(`/api/products/${productId}`).send({
            name: "smart tv",
            price: 300,
            active: true,
        })
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty("error")
        expect(response.body.error).toBe("Producto no encontrado")

        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty("data")
    });

    it('should update a existing product with validate data', async () => {
        const response = await request(server).put(`/api/products/1`).send({
            name: "smart tv",
            price: 300,
            active: true,
        })
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("data")
        expect(response.status).not.toBe(400)
        expect(response.body).not.toHaveProperty("error")
    });
});


describe("PATH  api/products/:id ", () => {

    it('should return a 404 response for a non-existing product ', async () => {
        const producId = 2000
        const response = await request(server).patch(`/api/products/${producId}`)
        expect(response.status).toEqual(404)
        expect(response.body).toHaveProperty("error")
        expect(response.body.error).toBe("Producto no encontrado")
        expect(response.status).not.toEqual(200)
        expect(response.body).not.toHaveProperty("data")


    });

    it('should return no exist product ', async () => {
        const response = await request(server).patch(`/api/products/no-validate`)
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty("error")
        expect(response.body.error[0].msg).toBe("Id no valido")
    });

    it('should update the product active ', async () => {
        const response = await request(server).patch(`/api/products/1`)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("data")

    });
})

describe("DELETE api/products/:id", () => {
    it('should check a validate ID', async () => {
        const response = await request(server).delete(`/api/products/no-validate`)

        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty("error")
        expect(response.body.error[0].msg).toBe("Id no valido")
    });

    it('should return a 404 response for no exist', async () => {
        const productId = 200
        const response = await request(server).delete(`/api/products/${productId}`)

        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty("error")
        expect(response.body.error).toBe("Producto no encontrado")
        expect(response.status).not.toBe(200)
    });

    it('should delete a product ', async () => {
        const response = await request(server).delete(`/api/products/1`)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("data")
        expect(response.body.data).toBe("Producto eliminado")
        expect(response.status).not.toBe(400)
        expect(response.body.error).not.toBe("Producto no encontrado")
    });
})
