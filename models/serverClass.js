import express from 'express'
import cors from 'cors'
import routerProduct from '../routes/api.routes.js'
import { PORT } from '../helper/conectionEnv.js'

class ModelServer {
  constructor() {
    this.port = PORT
    this.app = express()
    this.productosPath = '/clientes'
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.static('public'))
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes() {
    this.app.use(this.productosPath, routerProduct)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}

export default ModelServer
