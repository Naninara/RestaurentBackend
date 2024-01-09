const express = require("express");
const router = express.Router();

const verifyJwt = require("../Middleware/jwtParsor");
const {
  GetAllMenuItems,
  GetsingleMenuItems,
} = require("../Controllers/MenuController");
router.route("/").get(GetAllMenuItems);

router.route("/:id").get(GetsingleMenuItems);
module.exports = router;
