import { response, request } from 'express'

const obtenerClientes = (req = request, res = response) => {
  res.json({
    msg: 'get API - Clientes'
  })
}

const obtenerCliente = (req = request, res = response) => {
  res.json({
    msg: 'get API - Cliente'
  })
}

const crearCliente = (req = request, res = response) => {
  res.json({
    msg: 'post API - Cliente'
  })
}

const actualizarCliente = (req = request, res = response) => {
  res.json({
    msg: 'put API - actualizar'
  })
}

const eliminarCliente = (req = request, res = response) => {
  res.json({
    msg: 'delete API - elliminar'
  })
}

const eliminarClientes = (req = request, res = response) => {
  res.json({
    msg: 'delete API - eliminar todo'
  })
}
export const objC = {
  obtenerClientes,
  obtenerCliente,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
  eliminarClientes
}
