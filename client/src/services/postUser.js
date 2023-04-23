import { postFetch } from './hooks/postFetch.js'

export const postUser = async (form) => {
  const inputs = Array.from(form.current.childNodes).slice(0, 10)
  const user = {
    nombre: inputs[0].value,
    apellido: inputs[1].value,
    correo: inputs[2].value,
    edad: inputs[3].value,
    telefono: inputs[4].value,
    provincia: inputs[5].value,
    ciudad: inputs[6].value,
    direccion: inputs[7].value,
    postal: inputs[8].value,
    password: inputs[9].value
  }

  try {
    const data = await postFetch('http://localhost:3000/usuario', user)
    return data
  } catch (e) {
    console.log('No se pudo crear el usuario')
  }
}
