import { Sequelize } from "sequelize"
import dotenv from "dotenv"
dotenv.config()

const { DB } = process.env

export const db = new Sequelize(DB)



