const express = require("express");

const router = express.Router();

// Import item-related actions
const {
  browse,
  read,
  readByLetters,
  add,
} = require("../../../controllers/accountActions");

// Route to get a list of items
router.get("/", browse);

// Route to get accounts by letter
router.get("/search", readByLetters);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
