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

    it('should get a product by Id', async () => {
        const response = await request(server).get("/api/products")

    });
})