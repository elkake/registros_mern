import { useEffect, useRef, useState } from 'react'
import Options from '../components/Options'
import { getMunicipios } from '../services/getZone.js'
import { validarUsuario } from '../helper/validarUsuario'
import { postUser } from '../services/postUser'
import { useGlobalContext } from '../context/GlobalContext'

function CrearUsuario({ setCrear }) {
  const [provincia, setProvincia] = useState([])
  const [ciudad, setCiudad] = useState([])
  const [errorForm, setErrorForm] = useState(false)
  const [message, setMessage] = useState('')
  const { setActualizar } = useGlobalContext()

  const formRef = useRef()

  useEffect(() => {
    setProvincia(JSON.parse(sessionStorage.getItem('provincias')))
  }, [])

  useEffect(() => {
    setErrorForm(true)
  }, [message])

  // ? obteniendo id de la provincia para obtener los municipios
  const obtenerIDProvincia = (e) => {
    const id = e.target.id
    if (id) {
      getMunicipios(id).then((res) => {
        if (id === '02') {
          setCiudad([{ id: '020144', nombre: 'Buenos Aires GBA' }])
        } else {
          setCiudad(res)
        }
      })
    }
  }

  // todo submit form
  const submitData = (e) => {
    e.preventDefault()
    setErrorForm(false)

    // TODO validar que los campos esten ok
    const msg = validarUsuario(formRef)
    if (msg === message) {
      setErrorForm(true)
    }
    if (msg !== 'ok') {
      setMessage(msg)
    }
    if (msg === 'ok') {
      postUser(formRef).then((res) => {
        if (res.status === 200) {
          alert(res.msg)
          setActualizar(true)
        } else {
          alert(res.msg)
        }
      })
    }
  }

  return (
    <div className='bg-config-vcolor1 max-w-md w-80 rounded-lg shadow-2xl relative'>
      <button
        className='absolute top-1 left-1 rounded-full bg-white w-6 h-6 text-config-vcolor1 font-black'
        onClick={() => setCrear(false)}
      >
        X
      </button>
      <h1 className='font-bold text-xl flex justify-center items-center h-12 text-white'>
        REGISTRAR USUARIO
      </h1>
      <section className='' id='get_usuarios'>
        <form
          ref={formRef}
          onSubmit={(e) => submitData(e)}
          className='flex flex-col w-11/12 m-auto'
          action=''
        >
          <input
            name='nombre'
            className='w-full mt-1 rounded-sm py-1 px-2 bg-vcolor2 shadow-inner  '
            type='text'
            placeholder='Nombre'
          />

          <input
            name='apellido'
            className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
            type='text'
            placeholder='Apellido'
          />

          <input
            name='correo'
            className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
            type='email'
            placeholder='Correo'
          />

          <input
            name='edad'
            className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
            type='number'
            placeholder='Edad'
            min={18}
            max={120}
          />

          <input
            name='telefono'
            className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
            type='text'
            placeholder='+541234567890'
          />

          <select
            onClick={(e) => obtenerIDProvincia(e)}
            className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
            name='provincia'
            defaultValue={'Provincia'}
          >
            <option value={'Provincia'} disabled>
              Provincia
            </option>
            {provincia.map((provincia) => {
              if (
                provincia.nombre ===
                'Tierra del Fuego, Antártida e Islas del Atlántico Sur'
              ) {
                provincia.nombre = 'Tierra del Fuego'
              }

              if (provincia.nombre === 'Ciudad Autónoma de Buenos Aires') {
                provincia.nombre = 'Buenos Aires GBA'
              }

              return (
                <Options
                  key={provincia.id}
                  id={provincia.id}
                  value={provincia.nombre}
                  children={provincia.nombre}
                />
              )
            })}
          </select>

          <select
            className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
            type='text'
            placeholder='Provincia'
            name='ciudad'
            defaultValue={'Ciudad'}
          >
            <option value={'Ciudad'} disabled>
              Ciudad
            </option>
            {ciudad.map((ciudad) => (
              <Options
                key={ciudad.id}
                id={ciudad.id}
                value={ciudad.nombre}
                children={ciudad.nombre}
              />
            ))}
          </select>

          <input
            name='direccion'
            className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner '
            type='text'
            placeholder='Direccion'
          />

          <input
            name='codigo postal'
            className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner '
            type='text'
            placeholder='Codigo Postal'
          />

          <input
            name='password'
            className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
            type='password'
            placeholder='Password'
          />

          <input
            name='confirmación de password'
            className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
            type='password'
            placeholder='Confirmar Password'
          />
          {errorForm && (
            <span className='text-red-500 text-xs mt-1 text-center'>
              {message}
            </span>
          )}

          <input
            name='n'
            className='w-full mt-2 mb-3 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner text-config-vcolor1 font-black text-xl  bg-config-vcolor2 hover:bg-config-vcolor4 hover:text-config-vcolor2 transition duration-300 ease-in-out'
            type='submit'
            value={'CREAR'}
          />
        </form>
      </section>
    </div>
  )
}

export default CrearUsuario
