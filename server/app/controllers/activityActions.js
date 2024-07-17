const tables = require("../../database/tables");

// BROWSE
const browse = async (req, res, next) => {
  try {
    const activities = await tables.activity.readAll();
    res.json(activities);
  } catch (err) {
    next(err);
  }
};
// READ (one)
const read = async (req, res, next) => {
  try {
    const activity = await tables.activity.read(req.params.id);
    if (activity == null) {
      res.sendStatus(404);
    } else {
      res.json(activity);
    }
  } catch (err) {
    next(err);
  }
};

// ADD
const add = async (req, res, next) => {
  const activity = req.body;
  try {
    const insertId = await tables.activity.create(activity);
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
