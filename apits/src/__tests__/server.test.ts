import request from 'supertest';
import { connectDB, server } from "../server";
import { header } from 'express-validator';
import { application } from 'express';
import { db } from '../config/db';

describe("GET /api", () => {
    it('Responder con json ', async () => {
        const res = await request(server).get("/api")
        expect(res.status).toBe(200)
        expect(res.header["content-type"]).toMatch("application/json")
        expect(res.body.message).toBe("Desde API")

        expect(res.status).not.toBe(400)
        expect(res.body.message).not.toBe("desde API")

    });
})


jest.mock('../config/db')

describe("ConnectDB", () => {
    it('should handle database connect a error', async () => {
        jest.spyOn(db, "authenticate").mockRejectedValueOnce(new Error("Hubo un error al conectar la Base de Datos"))
        const consoleSpy = jest.spyOn(console, "log")
        await connectDB()

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining("Hubo un error al conectar la Base de Datos")
        )
    });
})