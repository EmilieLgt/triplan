const tables = require("../../database/tables");

// BROWSE
const browse = async (req, res, next) => {
  try {
    const activities = await tables.activity.readAll();
    res.status(201).json(activities);
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

const readByTravel = async (req, res) => {
  try {
    const travelId = req.query.travel_id;
    if (!travelId) {
      return res.status(400).json({ message: "travel_id is required" });
    }
    const activities = await tables.activity.readWithTravel(travelId);
    return res.status(200).json(activities);
  } catch (err) {
    console.error("Error in readByTravel:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

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
  readByTravel,
  add,
};
