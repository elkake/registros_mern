import { createPool } from 'mysql2/promise'
import { objDB } from './conectionEnv.js'

export const pool = createPool({
  host: objDB.DB_HOST,
  user: objDB.DB_USER,
  password: objDB.DB_PASSWORD,
  database: objDB.DB_DATABASE
})
