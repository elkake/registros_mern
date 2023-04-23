import { getFetch } from './hooks/getFetch'

export const getUser = async (id) => {
  try {
    const response = await getFetch('http://localhost:3000/usuario')
    return response
  } catch (e) {
    console.log(
      'No se pudo obtener la lista de usuarios \n verifique que la bd este activa'
    )
  }
}
