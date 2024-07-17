const express = require("express");

const router = express.Router();

const { addImages } = require("../../../controllers/uploadImgAction");

router.post("/", addImages);

module.exports = router;
