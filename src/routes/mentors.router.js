const express = require("express");

const mentorsUseCase = require("../usecases/mentors.usecase");

const router = express.Router();

// listar todos los mentors
router.get("/", (request, response) => {
  try {
    const mentors = mentorsUseCase.getAll();

    response.json({
      success: true,
      message: "All Mentors",
      data: {
        mentors,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Error at get all mentors",
      error: error.message,
    });
  }
});

// obtener un mentor por su id
router.get("/:id", (request, response) => {
  try {
    const id = request.params.id;
    const mentor = mentorsUseCase.getById(id);

    response.json({
      success: true,
      message: "Mentor by ID",
      data: {
        mentor,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Error at get mentor by ID",
      error: error.message,
    });
  }
});

// crear un mentor
router.post("/", (request, response) => {
  try {
    const data = request.body;
    const newMentor = mentorsUseCase.add(data);

    response.json({
      success: true,
      message: "Mentor created",
      data: {
        mentor: newMentor,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Error at create mentor",
      error: error.message,
    });
  }
});

// actualizar un mentor
router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const data = request.body;
    const mentorUpdated = await mentorsUseCase.updateById(id, data);

    response.json({
      success: true,
      message: "Mentor updated",
      data: {
        mentor: mentorUpdated,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Error at update mentor",
      error: error.message,
    });
  }
});

// borrar un mentor por su id
router.delete("/:id", (request, response) => {
  try {
    const id = request.params.id;
    const mentorDeleted = mentorsUseCase.deleteById(id);

    response.json({
      success: true,
      message: "Mentor deleted",
      data: {
        mentor: mentorDeleted,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      message: "Error at delete mentor",
      error: error.message,
    });
  }
});

module.exports = router;
