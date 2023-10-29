const UserDb = require("../Model/UserSchema");
const bcrypt = require("bcrypt");
const { response } = require("express");
const PassChange = async (req, res) => {
  const { email, prevpass, newpass } = req.body;
  const foundUser = await UserDb.findOne({ gmail: email });
  if (!foundUser) {
    res.status(400).json({ msg: "User Not Registered" });
  } else {
    const passwordMatch = await bcrypt.compare(prevpass, foundUser.passWord);
    if (passwordMatch) {
      const pass = await bcrypt.hash(newpass, 10);
      foundUser.passWord = pass;
      await foundUser
        .save()
        .then((response) => {
          res.status(203).json({ msg: "Password Changed Successfully" });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      res.status(401).json({ msg: "Prevoius PassWord Wrong" });
    }
  }
};

module.exports = PassChange;
