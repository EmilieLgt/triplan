const express = require("express");

const router = express.Router();

// Import item-related actions
const {
  browse,
  read,
  readFriendsFromRequest,
  readFriendsPostRequest,
  add,
  edit,
} = require("../../../controllers/friendActions");

// Route to get a list of items
router.get("/", browse);

// Route to get friends from friends request
router.get("/friends/:id", readFriendsFromRequest);

// Route to get friends you added
router.get("/request/:id", readFriendsPostRequest);

router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

// Router to edit friend request
router.put("/", edit);

/* ************************************************************************* */

module.exports = router;
