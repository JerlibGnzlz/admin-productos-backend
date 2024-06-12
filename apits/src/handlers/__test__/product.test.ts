import request from "supertest";
import { server } from "../../server";

describe("POST /api/products", () => {
    it('Should validated errors', async () => {
        const response = await request(server).post("/api/products").send()
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty("erros")
        expect(response.body.erros).toHaveLength(4)

        expect(response.badRequest).toBe(true)
        expect(response.body.erros).not.toHaveProperty("erros")
    });

    it('Should validated that price is > 0', async () => {
        const response = await request(server).post("/api/products").send({
            "name": "tv desde testing",
            "price": 0,
        })
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty("erros")
        expect(response.body.erros).not.toHaveLength(2)
        // expect(0).toBe(0)
        // expect(0).not.toBe(100)
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
        expect(response.body).not.toHaveProperty("erros")
    });
})