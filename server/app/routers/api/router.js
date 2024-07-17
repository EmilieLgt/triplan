const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const accountRouter = require("./account/router");
const travelRouter = require("./travel/router");
const activityRouter = require("./activity/router");
const associationRouter = require("./association/router");
const friendRouter = require("./friend/router");
const uploadRouter = require("./uploadImg/route");

router.use("/account", accountRouter);
router.use("/travel", travelRouter);
router.use("/activity", activityRouter);
router.use("/association", associationRouter);
router.use("/friend", friendRouter);
router.use("/upload", uploadRouter);
/* ************************************************************************* */

module.exports = router;
