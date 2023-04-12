import { Router } from 'express'
import { objC } from '../controller/cliente.js'

const routerClient = Router()

routerClient.get('/', objC.obtenerClientes)

routerClient.get('/:id', objC.obtenerCliente)

routerClient.post('/', objC.crearCliente)

routerClient.put('/:id', objC.actualizarCliente)

routerClient.delete('/:id', objC.eliminarCliente)

// router.delete('/', eliminarClientes)

export default routerClient
