const db = require("../lib/db");
const Koder = require("../models/koders.model");
const { createId } = require("@paralleldrive/cuid2");

function getAll() {
  const koders = db.read("koders");
  return koders;
}

function add(newKoder) {
  const newID = createId();
  newKoder.id = newID;

  const koder = Koder(newKoder);

  const koders = db.read("koders");
  koders.push(koder);

  db.save("koders", koders);

  return koder;
}

function deleteById(id) {
  const koders = db.read("koders");

  const newKoders = koders.filter((koder) => koder.id !== id);
  db.save("koders", newKoders);

  return id;
}

function getById(id) {
  const koders = db.read("koders");

  const koder = koders.find((koder) => koder.id === id);

  return koder;
}

function updateById(id, newData) {
  const koders = db.read("koders");

  let koder = koders.find((koder) => koder.id === id);

  koder = { ...koder, ...newData };

  const koderValidated = Koder(koder);

  const newKoders = koders.map((currentKoder) => {
    if (currentKoder.id === id) {
      return koderValidated;
    } else {
      return currentKoder;
    }
  });

  db.save("koders", newKoders);

  return koderValidated;
}

module.exports = {
  add,
  deleteById,
  getAll,
  getById,
  updateById,
};
