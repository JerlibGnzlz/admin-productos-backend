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
        expect(res.body.message).toBe("Desde API")

        expect(res.status).not.toBe(400)
        expect(res.body.message).not.toBe("desde API")

    });
})