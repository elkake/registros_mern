import React from 'react'

function TrUser({ obj }) {
  return (
    <tr className='hover:bg-config-vcolor3'>
      <td className='border-x-2 px-1 h-7 border-config-vcolor4'>{obj.id}</td>
      <td className='border-x-2 px-1 h-7 border-config-vcolor4'>
        {obj.nombre}
      </td>
      <td className='border-x-2 px-1 h-7 border-config-vcolor4'>
        {obj.apellido}
      </td>
      <td className='hidden sm:table-cell border-x-2 px-1 h-7 border-config-vcolor4'>
        {obj.correo}
      </td>
      <td className='hidden sm:table-cell border-x-2 px-1 h-7 border-config-vcolor4'>
        {obj.edad}
      </td>
      <td className='hidden sm:table-cell border-x-2 px-1 h-7 border-config-vcolor4'>
        {obj.telefono}
      </td>
      <td className='sm:hidden border-x-2 px-1 h-7 border-config-vcolor4'>
        <select className='focus:border-orange-300 border-2 rounded-sm w-10'>
          <option value={'Correo: '}>Correo: {obj.correo}</option>
          <option value={'La Plata'}>Edad: {obj.edad}</option>
          <option value={'asdsadasd'}>Telefono: {obj.telefono}</option>
        </select>
      </td>
      <td className='hidden sm:table-cell'>{obj.provincia}</td>
      <td className='hidden sm:table-cell border-x-2 border-config-vcolor4'>
        {obj.ciudad}
      </td>
      <td className='hidden sm:table-cell'>{obj.direccion}</td>
      <td className='sm:hidden border-x-2 px-1 h-7 border-config-vcolor4'>
        <select className='focus:border-orange-300 border-2 rounded-sm w-10'>
          <option value={'Buenos Aires'}>Provincia: {obj.provincia}</option>
          <option value={'La Plata'}>Ciudad: {obj.ciudad}</option>
          <option value={'asdsadasd'}>Direccion: {obj.direccion}</option>
          <option value={'B1900'}>Cod. Postal: {obj.postal}</option>
        </select>
      </td>
      <td className='hidden sm:table-cell border-x-2 px-1 h-7 border-config-vcolor4'>
        {obj.postal}
      </td>
      <td className='flex flex-col justify-center items-center sm:flex-row border-r-2 sm:gap-1 border-config-vcolor4 sm:h-7 sm:py-1'>
        <button className='rounded-md border-2 w-12 bg-config-vcolor3 text-white font-black'>
          Editar
        </button>
        <button className='rounded-md border-2 w-14 bg-red-500 text-white focus:bg-red-700'>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default TrUser
