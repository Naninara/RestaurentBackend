const user = require("../Model/UserSchema");
const bcrypt = require("bcrypt");
const LoginController = async (req, res) => {
  const { email, pass } = req.body;
  const foundUser = await user.findOne({ gmail: email });

  if (!foundUser) {
    res.status(401).json({ msg: "User Not Registered" });
  } else {
    const isPasswordMatch = await bcrypt.compare(pass, foundUser.passWord);
    if (isPasswordMatch) {
      res.status(200).json({
        msg: "Logged in sucessfully",
        name: foundUser.UserName,
        gmail: foundUser.gmail,
      });
    } else {
      res.sendStatus(401);
    }
  }
};

module.exports = LoginController;
