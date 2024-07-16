const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const accountRouter = require("./account/router");

router.use("/account", accountRouter);

/* ************************************************************************* */

module.exports = router;
