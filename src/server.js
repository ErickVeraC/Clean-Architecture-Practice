// Descripcion del servidor
const express = require("express");
const loggerMiddleware = require("./middlewares/logger");

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.get("/", (request, response) => {
  response.json({
    success: true,
    message: "Koders APIv1",
  });
});

module.exports = app;
