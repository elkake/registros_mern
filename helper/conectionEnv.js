import dotenv from 'dotenv'

dotenv.config()

const DB_HOST = process.env.MYSQLHOST
const DB_USER = process.env.MYSQLUSER
const DB_PASSWORD = process.env.MYSQLPASSWORD
const DB_DATABASE = process.env.MYSQLDATABASE
const MYSQLPORT = process.env.MYSQLPORT

export const objDB = {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  MYSQLPORT
}

export const PORT = process.env.PORT
