// Descripcion del servidor
const express = require("express");
const loggerMiddleware = require("./middlewares/logger");

const kodersRouter = require("./routes/koders.router");
const mentorsRouter = require("./routes/mentors.router");

const app = express();

app.use(express.json());
app.use(loggerMiddleware);
app.use("/koders", kodersRouter);
app.use("/mentors", mentorsRouter);

app.get("/", (request, response) => {
  response.json({
    success: true,
    message: "Koders APIv1",
  });
});

module.exports = app;
