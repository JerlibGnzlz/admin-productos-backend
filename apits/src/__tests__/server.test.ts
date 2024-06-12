// import request from "supertest";
import request from 'supertest';
import { server } from "../server";
import { header } from 'express-validator';
import { application } from 'express';

describe("GET /api", () => {
    it('Responder con json ', async () => {
        const res = await request(server).get("/api")
        expect(res.status).toBe(200)
        expect(res.header["content-type"]).toMatch("application/json")
        expect(res.body.message).toEqual("Desde API")

        console.log("RESPUESTA", res.header)
        console.log("RESPUESTAbody", res.body.message)

    });
})