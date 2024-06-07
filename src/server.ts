import express from "express"
import router from "./routes"
import { db } from "./config/db"


async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log("Coneccion exitosa")
    } catch (error) {
        console.log(error)
        console.log("Hubo un error al conectar la Base de Datos")
    }
}
connectDB()

export const server = express()

server.use(express.json())

server.use("/api/products", router)

