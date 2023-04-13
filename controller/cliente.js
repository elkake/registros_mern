import { response, request } from 'express'
import { pool } from '../helper/conectionBD.js'

/*
  * GET data
  ? Obtener todos los clientes
*/
const obtenerClientes = async (req = request, res = response) => {
  try {
    const [result] = await pool.query('SELECT * FROM persona')
    res.json({
      result
    })
  } catch (error) {
    console.log(error)
    res.json({
      msg: 'Error en la consulta'
    })
  }
}

/*
  * GET one data
  ? Obtener solo un cliente por id
  TODO: Obtener el id como entero
  TODO: Query para obtener solo un cliente
*/

const obtenerCliente = async (req = request, res = response) => {
  const id = parseInt(req.params.id)
  try {
    const [result] = await pool.query('SELECT * FROM persona WHERE id_p=?', [
      id
    ])
    res.json({
      result
    })
  } catch (error) {
    console.log(error)
    res.json({
      msg: 'Error en la consulta'
    })
  }
}

/*
  * POST data
  ? Crear un nuevo cliente
  TODO: obtener los datos del body (object destructuring)
  TODO: query insert into
*/

const crearCliente = async (req = request, res = response) => {
  const { nombre, apellido, edad, email, contrasena } = req.body
  try {
    await pool.query(
      'INSERT INTO persona (name, lastName, age, email, password) values (?, ?, ?, ?, ?)',
      [nombre, apellido, edad, email, contrasena]
    )
    res.json({
      msg: 'Creado correctamente'
    })
  } catch (error) {
    res.json({
      msg: error
    })
  }
}

/*
  * PUT data
  ? Editar cliente a traves del id
  TODO: obtener el id como entero
  TODO: obtener los datos del body (object destructuring)
  TODO: convertir el 'edad' a entero, en caso no tener colocar 0
  TODO: query update
*/

const actualizarCliente = async (req = request, res = response) => {
  const id = parseInt(req.params.id)
  const { nombre, apellido, edad, email, contrasena } = req.body
  const edadEntero = edad ? parseInt(edad) : 0

  try {
    await pool.query(
      'UPDATE persona SET name=?, lastName=?, age=?,email=? ,password=?  WHERE id_p=?',
      [nombre, apellido, edadEntero, email, contrasena, id]
    )
    res.json({
      msg: 'ACtualizado correctamente'
    })
  } catch (error) {
    res.json({
      msg: error
    })
  }
}

/*
  * DELETE data
  ? Eliminar cliente a traves del id
  TODO: obtener el id como entero
  TODO: query delete
*/
const eliminarCliente = async (req = request, res = response) => {
  const id = parseInt(req.params.id)
  try {
    pool.query('DELETE FROM persona WHERE id_p=?', [id])

    res.json({
      msg: 'Eliminado correctamente'
    })
  } catch (error) {
    res.json({
      msg: error
    })
  }
}

/*
  * DELETE all data
  ? Eliminar cliente todos los datos de la tabla
  !no se recomienda usar
  TODO: query delete
*/

const eliminarClientes = (req = request, res = response) => {}

export const objC = {
  obtenerClientes,
  obtenerCliente,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
  eliminarClientes
}
