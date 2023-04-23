import { useState, useEffect } from 'react'
import CrearUsuario from '../module/CrearUsuario'
import ListarUsuarios from '../module/ListarUsuarios'
import { GlobalContext } from '../context/GlobalContext'

function Usuario({ toggleMenu }) {
  const [crear, setCrear] = useState(false)
  const [filtros, setFiltros] = useState(false)

  return (
    <div
      className='text-center w-screen h-full bg-config-vcolor1'
      onClick={() => toggleMenu(false)}
    >
      <h1 className='text-2xl text-config-vcolor2 font-black'>
        USUARIOS REGISTRADOS
      </h1>
      <GlobalContext>
        <div className='flex flex-col sm:flex-row w-screen h-full justify-center items-center z-0'>
          <button
            className='rounded-md border-2 w-20 bg-config-vcolor4 sm:hidden'
            onClick={() => setFiltros(true)}
          >
            filtros
          </button>
          <aside
            className={`absolute w-screen h-screen bg-black opacity-25 text-white top-0 left-0 sm:relative sm:block sm:max-w-xs sm:h-full ${
              filtros ? 'block' : 'hidden'
            }`}
          >
            <button
              onClick={() => setFiltros(false)}
              className='rounded-full border-2 w-7 h-7 bg-red-500
            sm:hidden'
            >
              X
            </button>
            <span>filtrosgjfgjhfhg</span>
          </aside>
          <ListarUsuarios setCrear={setCrear} />
        </div>
        {crear && (
          <div className='w-screen bg-gray-900 bg-opacity-60 flex justify-center items-center absolute z-30 top-0 left-0 h-screen sm:h-fit'>
            <CrearUsuario setCrear={setCrear} />
          </div>
        )}
      </GlobalContext>
    </div>
  )
}

export default Usuario
