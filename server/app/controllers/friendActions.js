const tables = require("../../database/tables");

// BROWSE
const browse = async (req, res, next) => {
  try {
    const friends = await tables.operation_friend.readAll();
    res.json(friends);
  } catch (err) {
    next(err);
  }
};
// READ (one)
const read = async (req, res, next) => {
  try {
    const friend = await tables.operation_friend.read(req.params.id);
    if (friend == null) {
      res.sendStatus(404);
    } else {
      res.json(friend);
    }
  } catch (err) {
    next(err);
  }
};

// Read friends from your own request
const readFriendsFromRequest = async (req, res, next) => {
  try {
    const friends = await tables.operation_friend.readFromRequest(
      req.params.id
    );
    if (friends == null) {
      res.sendStatus(404);
    } else {
      res.json(friends);
    }
  } catch (err) {
    next(err);
  }
};

// Read friends from their request
const readFriendsPostRequest = async (req, res, next) => {
  try {
    const friends = await tables.operation_friend.readPostRequest(
      req.params.id
    );
    if (friends == null) {
      res.sendStatus(404);
    } else {
      res.json(friends);
    }
  } catch (err) {
    next(err);
  }
};

// ADD
const add = async (req, res, next) => {
  const friend = req.body;
  try {
    const insertId = await tables.operation_friend.create(friend);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// EDIT
const edit = async (req, res, next) => {
  const updatedRequest = req.body;
  try {
    const affectedRows =
      await tables.operation_friend.updateOnReceiving(updatedRequest);
    if (affectedRows > 0) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ message: "Request not found or no changes made" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  readFriendsFromRequest,
  readFriendsPostRequest,
  add,
  edit,
};
