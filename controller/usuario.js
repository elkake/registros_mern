import { Usuario } from '../helper/sequelizeBD.js'
import { response, request } from 'express'

// * Obtener TODOS los datos por columna
const obtenerUser = async (req = request, res = response) => {
  const {
    nombre,
    apellido,
    correo,
    edad,
    telefono,
    provincia,
    ciudad,
    direccion
  } = req.query

  // Crear un arreglo que contiene los campos con los que se filtrará
  const arreglo = [
    nombre,
    apellido,
    correo,
    edad,
    telefono,
    provincia,
    ciudad,
    direccion
  ]
  // Crear un arreglo que contiene los campos no nulos
  const arregloListo = []

  // quitar los null de arreglo
  // ?no uso filter me sigue retornando la misma cantidad de elementos vacios
  arreglo.forEach((item) => {
    if (item != null) {
      arregloListo.push(item)
    }
  })

  // Si el arreglo de campos no nulos no está vacío, filtrar por esos campos; si no, excluir la contraseña
  const usuarios = await Usuario.findAll({
    attributes:
      arregloListo.length > 0 ? arregloListo : { exclude: ['password'] }
  })

  res.json({
    msg: 'get API - usuario',
    usuarios,
    registros: usuarios.length
  })
}

// * Obtener un usuario por ID
const obtenerUsuarioId = async (req = request, res = response) => {
  const { id } = req.params
  const usuario = await Usuario.findByPk(id)
  res.json({
    msg: 'get API - usuario',
    usuario
  })
}

// * Obtener un usuario por query
const obtenerUsuarioQuery = async (req = request, res = response) => {
  const data = req.query

  // ? De momento la busqueda es exacta y no importa el caseSensitive
  const usuario = await Usuario.findAll({
    where: data
  })
  res.json({
    msg: 'get API - usuario',
    usuario
  })
}

// * Crear un usuario
const crearUser = async (req = request, res = response) => {
  const usuario = req.body

  // modelo de usuario
  /* const objUser = {
    nombre: '',
    apellido: '',
    correo: '',
    edad: 25,
    telefono: '',
    provincia: '',
    ciudad: '',
    direccion: ''
  } */

  const data = await Usuario.create(usuario)
  res.json({
    msg: 'post API - usuario',
    data
  })
}

// * Editar un usuario por ID
const editarUserbyId = async (req = request, res = response) => {
  const { id } = req.params
  const usuario = req.body

  const resp = await Usuario.update(usuario, { where: { id } })

  res.send(resp[0] ? 'Usuario actualizado' : 'Usuario no actualizado')
}

// * Eliminar un usuario por ID
const eliminarUserbyId = async (req = request, res = response) => {
  const { id } = req.params
  const resp = await Usuario.destroy({ where: { id } })
  res.send(resp ? 'Usuario eliminado' : 'Usuario no eliminado')
}

// * Objeto que contiene las funciones a exportar
export const objU = {
  obtenerUser,
  crearUser,
  obtenerUsuarioId,
  obtenerUsuarioQuery,
  editarUserbyId,
  eliminarUserbyId
}
