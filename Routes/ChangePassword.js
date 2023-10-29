const ForgotPassController = require("../Controllers/ForgotPasswordController");
const express = require("express");
const router = express.Router();

router.route("/").patch(ForgotPassController);

module.exports = router;
