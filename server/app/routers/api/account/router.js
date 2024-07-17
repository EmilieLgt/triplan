const express = require("express");

const router = express.Router();

// Import item-related actions
const {
  browse,
  readByLetters,
  readWithTripsAndFriends,
  read,
  add,
} = require("../../../controllers/accountActions");

// Route to get a list of items
router.get("/", browse);

// Route to get accounts by letter
router.get("/search", readByLetters);

// Router to get trips and friends from id

router.get("/info/:id", readWithTripsAndFriends);

// Routes to login

const { login } = require("../../../controllers/authActions");

router.post("/login", login);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
