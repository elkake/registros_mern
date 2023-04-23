import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import { getUser } from '../services/getUser.js'
import TrUser from '../components/TrUser'
function ListarUsuarios({ setCrear }) {
  const [usuarios, setUsuarios] = useState([])
  const { actualizar, setActualizar } = useGlobalContext()

  useEffect(() => {
    if (actualizar) {
      getUser().then((res) => {
        setUsuarios(res.usuarios)
      })
      setActualizar(false)
    }
  }, [actualizar])

  return (
    <section className='h-full w-screen px-4'>
      <table className='text-xs w-full bg-config-vcolor4 sm:text-xs sm:max-h-5/6 overflow-scroll'>
        <thead>
          <tr className='bg-config-vcolor3'>
            <th className='border-2 border-config-vcolor4 px-1 '>id</th>
            <th className='border-r-2 border-y-2 border-config-vcolor4 px-1 '>
              Nombre
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor4 px-1 '>
              Apellido
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor4 px-1 '>
              Datos
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor4 px-1 hidden sm:table-cell'>
              Correo
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor4 px-1 hidden sm:table-cell'>
              Edad
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor4 px-1 hidden sm:table-cell'>
              Tel.
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor4 px-1 hidden sm:table-cell'>
              Provincia
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor4 px-1 hidden sm:table-cell'>
              Ciudad
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor4 px-1 hidden sm:table-cell'>
              Direccion
            </th>
            <th className='border-y-2 border-config-vcolor4 px-1 hidden sm:table-cell'>
              Postal
            </th>
            <th className='border-y-2 border-config-vcolor4 px-1 sm:hidden'>
              Zona
            </th>
            <th className='border-2 border-config-vcolor4 px-1'>Acción</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((obj) => (
            <TrUser key={obj.correo} obj={obj} />
          ))}
        </tbody>
      </table>
      <button
        className='rounded-md border-2 w-20 bg-config-vcolor3 text-black font-black m-2 h-8'
        onClick={() => setCrear(true)}
      >
        crear
      </button>
      <button
        className='rounded-md border-2 w-20 bg-config-vcolor3 text-black font-black m-2 h-8'
        onClick={() => setActualizar(true)}
      >
        Listar
      </button>
    </section>
  )
}

export default ListarUsuarios
