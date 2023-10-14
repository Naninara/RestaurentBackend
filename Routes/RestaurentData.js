const express = require("express");
const router = express.Router();
const {
  GetAllRestarent,
  GetsingleRestuarent,
} = require("../Controllers/RestaurentsController");
router.route("/").get(GetAllRestarent);

router.route("/:id").get(GetsingleRestuarent);
module.exports = router;
