#BASE API 4 MYSQL

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

- Nombre de tabla de DB : `persona`
- Columnas de tabla:
  `id_p | name  | lastName | age | email             | password `
- key del objeto json entregado a traves del body para la creacion de clientes.
  `nombre, apellido, edad, email, contrasena`

(modificacion en models/serverClass.js > routes)

- Nombre estatico para consultas http: `/clientes/`

##CRUD
Este es un ejemplo con localhost:3000/
####GET
Obtener todos los elmentos de la tabla persona
`https://localhost:3000/clientes`
####GET for id
Obtener un dato a traves del id pasado como param
`https://localhost:3000/clientes/2`
####POST
Crear un nuevo cliente en la tabla persona
`https://localhost:3000/clientes`

- requisitos:
        body: JSON.stringify({
        nombre: value,
        apellido: value,
        edad: valueInt,
        email: value,
        contrasena: value
        })

####PUT
Actualizar un cliente a traves del :id
`https://localhost:3000/clientes/1`

- requisitos:
        body: JSON.stringify({
        nombre: value,
        apellido: value,
        edad: valueInt,
        email: value,
        contrasena: value
        })

####DELETE
Eliminar un cliente a traves del :id
`https://localhost:3000/clientes/1`
