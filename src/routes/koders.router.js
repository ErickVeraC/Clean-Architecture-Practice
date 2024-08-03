const express = require("express");

const kodersUseCase = require("../usecases/koders.usecase");

const router = express.Router();

// listar todos los koders
router.get("/", (request, response) => {
  try {
    const koders = kodersUseCase.getAll();

    response.json({
      success: true,
      message: "All koders",
      data: {
        koders,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Error at get all koders",
      error: error.message,
    });
  }
});

// obtener un koder por su id
router.get("/:id", (request, response) => {
  try {
    const id = request.params.id;
    const koder = kodersUseCase.getById(id);

    response.json({
      success: true,
      message: "Koder by ID",
      data: {
        koder,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Error at get koder by ID",
      error: error.message,
    });
  }
});

// crear un koder
router.post("/", (request, response) => {
  try {
    const data = request.body;
    const newKoder = kodersUseCase.add(data);

    response.json({
      success: true,
      message: "Koder created",
      data: {
        koder: newKoder,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Error at create koder",
      error: error.message,
    });
  }
});

// actualizar un koder
router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const data = request.body;
    const koderUpdated = await kodersUseCase.updateById(id, data);

    response.json({
      success: true,
      message: "Koder updated",
      data: {
        koder: koderUpdated,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Error at update koder",
      error: error.message,
    });
  }
});

// borrar un koder por su id
router.delete("/:id", (request, response) => {
  try {
    const id = request.params.id;
    const koderDeleted = kodersUseCase.deleteById(id);

    response.json({
      success: true,
      message: "Koder deleted",
      data: {
        koder: koderDeleted,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Error at delete koder",
      error: error.message,
    });
  }
});

module.exports = router;
