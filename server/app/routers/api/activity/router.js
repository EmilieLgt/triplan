const express = require("express");

const router = express.Router();

// Import item-related actions
const { browse, read, add } = require("../../../controllers/activityActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

/* ************************************************************************* */

module.exports = router;