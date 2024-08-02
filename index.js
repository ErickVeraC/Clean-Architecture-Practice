// Inicia la aplicación
// Poner el servidor a escuchar
// Abrir conexión a la base de datos
const app = require("./src/server");
const db = require("./src/lib/db");

const port = 8080;

db.initialize();
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
