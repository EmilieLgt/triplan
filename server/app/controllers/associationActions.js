const tables = require("../../database/tables");

// BROWSE
const browse = async (req, res, next) => {
  try {
    const associations = await tables.operation_association.readAll();
    res.json(associations);
  } catch (err) {
    next(err);
  }
};
// READ (one)
const read = async (req, res, next) => {
  try {
    const association = await tables.operation_association.read(req.params.id);
    if (association == null) {
      res.sendStatus(404);
    } else {
      res.json(association);
    }
  } catch (err) {
    next(err);
  }
};

// ADD
const add = async (req, res, next) => {
  const association = req.body;
  try {
    const insertId = await tables.operation_association.create(association);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
};
