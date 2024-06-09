import { Sequelize } from "sequelize-typescript"
import dotenv from "dotenv"
dotenv.config()

const { DB } = process.env

export const db = new Sequelize(DB, {
    models: [__dirname + "/../models/**/*.ts"]
})



