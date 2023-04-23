import { getFetch } from './hooks/getFetch.js'
// *retorna un string []
export const getProvincias = async () => {
  try {
    const { provincias } = await getFetch(
      'https://apis.datos.gob.ar/georef/api/provincias'
    )
    const ordenId = provincias.sort((a, b) => a.id - b.id)
    return JSON.stringify(ordenId)
  } catch (e) {
    console.log('No se pudo obtener las provincias')
  }
}

// *retorna un json []
export const getMunicipios = async (provincia) => {
  try {
    const { municipios } = await getFetch(
      `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}&campos=id,nombre&max=100`
    )
    const ordenId = municipios.sort((a, b) => a.id - b.id)
    return ordenId
  } catch (e) {
    console.log('No se pudo obtener los municipios')
  }
}
