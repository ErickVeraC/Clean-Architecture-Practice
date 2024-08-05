const db = require("../lib/db");
const Mentor = require("../models/mentors.model");
const { createId } = require("@paralleldrive/cuid2");

function getAll() {
  const mentors = db.read("mentors");
  return mentors;
}

function add(newMentor) {
  const newID = createId();
  newMentor.id = newID;

  const mentor = Mentor(newMentor);

  const mentors = db.read("mentors");
  mentors.push(mentor);

  db.save("mentors", mentors);

  return mentor;
}

function deleteById(id) {
  const mentors = db.read("mentors");

  const newMentors = mentors.filter((mentor) => mentor.id !== id);
  db.save("mentors", newMentors);

  return id;
}

function getById(id) {
  const mentors = db.read("mentors");

  const mentor = mentors.find((mentor) => mentor.id === id);

  return mentor;
}

function updateById(id, newData) {
  const mentors = db.read("mentors");

  let mentor = mentors.find((mentor) => mentor.id === id);

  mentor = { ...mentor, ...newData };

  const mentorValidated = Mentor(mentor);

  const newMentors = mentors.map((currentMentor) => {
    if (currentMentor.id === id) {
      return mentorValidated;
    } else {
      return currentMentor;
    }
  });

  db.save("mentors", newMentors);

  return mentorValidated;
}

module.exports = {
  add,
  deleteById,
  getAll,
  getById,
  updateById,
};
