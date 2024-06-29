import express from "express"
import swaggerUi from 'swagger-ui-express';
import router from "./routes"
import { db } from "./config/db"
import colors from "colors"
import { swaggerSpec } from "./config/swagger";
import cors, { CorsOptions } from 'cors';
import morgan from "morgan"



export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.bgBlue.bold("Coneccion Exitosa"))
    } catch (error) {
        console.log(colors.bgRed.bold("Hubo un error al conectar la Base de Datos"))
    }
}
connectDB()

export const server = express()

const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        if (origin === process.env.FRONTEND_URL) {
            callback(null, true)
        } else {
            callback(new Error("Error de CORS"))
        }
    },
    // methods: ['GET', 'POST', "PUT", "DELETE"],
};


server.use(cors(corsOptions))

server.use(morgan("dev"))

server.use(express.json())


server.use("/api/products", router)


server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
