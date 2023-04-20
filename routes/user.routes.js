import { Router } from 'express'
import { objU } from '../controller/usuario.js'
const routerUser = Router()

routerUser.get('/', objU.obtenerUser)

routerUser.get('/datos/:id', objU.obtenerUsuarioId)
routerUser.get('/datos', objU.obtenerUsuarioQuery)

routerUser.post('/', objU.crearUser)
routerUser.put('/datos/:id', objU.editarUserbyId)

routerUser.delete('/datos/:id', objU.eliminarUserbyId)
/*

routerUser.delete('/:id', objU.eliminarUser)
*/
export default routerUser
