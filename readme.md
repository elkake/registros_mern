#MERN + sequelize

Proyecto que se basa en la visualización de registros de compras realizada por diferentes usuarios.

- Tablas enlazadas a tráves de foreign keys.
  para reforzar los conocimientos de Mysql y aprender a poner en práctica el ORM Sequelize.

###EJECUCION

`npm start` -> `node --watch server.js`

###.env

`PORT=` puerto de escucha de API
`MYSQLDATABASE=` base de datos
`MYSQLHOST=` host
`MYSQLUSER=` usuario
`MYSQLPASSWORD=` contraseña
`MYSQLPORT=` puerto de base de datos

###Configuración general

(modificacion en controller/cliente.js)

- Creación de tablas : `./helper/sequelizeBD.js`

- Estructura de tabla usuarios:
  `id | nombre  | apellido | edad | correo | telefono | provincia | ciudad | direccion | password`

- Nombre estatico para consultas http: `/usuario/`

##CRUD

Este es un ejemplo con localhost:3000/

####GET

Obtener columnas a tráves de query.

`https://localhost:3000/usuario?nombre=nombre&apellido=apellido...`

NOTA: si no hay query se devuelve toda la tabla.

####GET Usuario ID

Obtener un dato a traves del id pasado como param

`https://localhost:3000/usuario/datos/2`

####GET Usuario query

Obtener una fila a traves de query

`https://localhost:3000/usuario/datos?nombre=Pepe`

####POST

Crear un nuevo cliente en la tabla usuarios

`https://localhost:3000/usuario`

- requisitos:
  body: JSON.stringify({
  "nombre": "Pepe",
  "apellido": "Perez",
  "correo": "test1@gmail.com",
  "edad": 25,
  "telefono": "0999999999",
  "provincia": "Pichincha",
  "ciudad": "Quito",
  "direccion": "Av. 6 de Diciembre",
  "password":"1111"
  })

####PUT

Actualizar un cliente a traves del :id

`https://localhost:3000/usuario/1`

- requisitos:
  body: JSON.stringify
  ({
  nombre: value,
  })

####DELETE

Eliminar un cliente a traves del :id

`https://localhost:3000/usuario/1`
