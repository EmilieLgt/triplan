const express = require("express");

const router = express.Router();

// Import item-related actions
const {
  browse,
  readByTravel,
  read,
  add,
} = require("../../../controllers/associationActions");

// Route to get a list of items
router.get("/", browse);

// Route to get activities by travel
router.get("/travel", readByTravel);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
