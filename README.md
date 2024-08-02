<!-- Markdown -->

# Clean architecture

Here we can see an example of clean architecture in a system file.

### Index.js

Se encarga de iniciar la aplicacion (el servidor)

### src/server.js

Se encarga de albergar la descripcion de nuestro servidor

### src/models

Se encarga de albergar los modelos de base de datos (mongoDB)

### src/usecases

Cada archivo tendra los casos de uso de cada uno de las entidades / recursos que
va a ocupar nuestra aplicacion

### src/routes

Un archivo por cada router (express) que tenga nuestra API

### src/middlewares

Las funciones middleware de nuestra API

### src/lib

Funciones utilitarias que no pertenecen a ninguna otra categoria
por ejemplo:

- El archivo de conexion a la base de datos
- La configuracion de nuestros tokens
- La configuracion de nuestra libreria de encriptado

### scripts

Iniciar en produccion

```bash
npm start
```

Iniciar modo de desarrollo

```bash
npm run dev
```
