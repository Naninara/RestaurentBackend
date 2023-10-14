const express = require("express");
const SignupController = require("../Controllers/SignupController");
const LoginController = require("../Controllers/LoginController");
const router = express.Router();

router.route("/signup").post(SignupController);

router.route("/login").post(LoginController);

module.exports = router;
