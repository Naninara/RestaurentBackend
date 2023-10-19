const express = require("express");
const CuisineController = require("../Controllers/CuisineController");
const router = express.Router();
router.route("/:name").get(CuisineController);

module.exports = router;
