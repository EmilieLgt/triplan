const tables = require("../../database/tables");

// BROWSE
const browse = async (req, res, next) => {
  try {
    const travels = await tables.travel.readAll();
    res.json(travels);
  } catch (err) {
    next(err);
  }
};
// READ (one)
const read = async (req, res, next) => {
  try {
    const travel = await tables.travel.read(req.params.id);
    if (travel == null) {
      res.sendStatus(404);
    } else {
      res.json(travel);
    }
  } catch (err) {
    next(err);
  }
};

const readWithUser = async (req, res, next) => {
  try {
    const travels = await tables.travel.readByUser(req.params.userID);
    if (travels == null) {
      res.sendStatus(404);
    } else {
      res.json(travels);
    }
  } catch (err) {
    next(err);
  }
};
// ADD
const add = async (req, res, next) => {
  const travel = req.body;
  try {
    const insertId = await tables.travel.create(travel);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  readWithUser,
  read,
  add,
};
