const user = require("../Model/UserSchema");

require("dotenv").config();

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const LoginController = async (req, res) => {
  const { email, pass } = req.body;
  const foundUser = await user.findOne({ gmail: email });

  if (!foundUser) {
    res.status(401).json({ msg: "User Not Registered" });
  } else {
    const isPasswordMatch = await bcrypt.compare(pass, foundUser.passWord);

    if (isPasswordMatch) {
      const JWTTOKEN = jwt.sign(
        {
          roles: foundUser.Authority,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1d" }
      );
      res.status(200).json({
        msg: "Logged in sucessfully",
        name: foundUser.UserName,
        gmail: foundUser.gmail,
        JWT: JWTTOKEN,
      });
    } else {
      res.sendStatus(401);
    }
  }
};

module.exports = LoginController;
