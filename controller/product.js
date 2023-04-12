import { response, request } from 'express'

const obtenerProductos = (req = request, res = response) => {
  res.json({
    msg: 'get API - productos'
  })
}

const obtenerProducto = (req = request, res = response) => {
  res.json({
    msg: 'get API - producto'
  })
}

const crearProducto = (req = request, res = response) => {
  res.json({
    msg: 'post API - producto'
  })
}

const actualizarProducto = (req = request, res = response) => {
  res.json({
    msg: 'put API - actualizar'
  })
}

const eliminarProducto = (req = request, res = response) => {
  res.json({
    msg: 'delete API - elliminar'
  })
}

const eliminarProductos = (req = request, res = response) => {
  res.json({
    msg: 'delete API - eliminar todo'
  })
}
export const objP = {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
  eliminarProductos
}
