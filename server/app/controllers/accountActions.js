const tables = require("../../database/tables");

// BROWSE
const browse = async (req, res, next) => {
  try {
    const accounts = await tables.account.readAll();
    res.json(accounts);
  } catch (err) {
    next(err);
  }
};
// READ (one)
const read = async (req, res, next) => {
  try {
    const account = await tables.account.read(req.params.id);
    if (account == null) {
      res.sendStatus(404);
    } else {
      res.json(account);
    }
  } catch (err) {
    next(err);
  }
};

const readByEmail = async (req, res, next) => {
  try {
    const account = await tables.account.readByEmail(req.body.email);
    if (account == null) {
      res.sendStatus(404);
    } else {
      res.status(201).json(account);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// READ (by letters in name/firstname)
const readByLetters = async (req, res, next) => {
  try {
    const account = await tables.account.researchByLetters(req.query.query);
    if (account == null) {
      res.sendStatus(200).json({ message: "account not found" });
    } else {
      res.json(account);
    }
  } catch (err) {
    next(err);
  }
};
const readWithTripsAndFriends = async (req, res, next) => {
  try {
    const account = await tables.account.readWithTrips(req.params.id);
    if (account == null) {
      res.sendStatus(404);
    } else {
      res.json(account);
    }
  } catch (err) {
    next(err);
  }
};

// ADD
const add = async (req, res, next) => {
  const account = req.body;
  try {
    const insertId = await tables.account.create(account);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  readByEmail,
  readByLetters,
  readWithTripsAndFriends,
  add,
};
