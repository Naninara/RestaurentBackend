const User = require("../Model/UserSchema");
const bcrypt = require("bcrypt");
const SignupController = async (req, res) => {
  const { email, pass, username } = req.body;
  const isExist = await User.findOne({ gmail: email });
  if (isExist) {
    return res.status(409).send("User Already exist");
  }
  try {
    const hashedPwd = await bcrypt.hash(pass, 10);
    const user = new User({
      gmail: email,
      UserName: username,
      passWord: hashedPwd,
    });

    await user
      .save()
      .then(() => {
        res.status(201).send("new user Created");
      })
      .catch((err) => console.log(err));
  } catch (err) {
    return res.status(501).send(err);
  }
};

module.exports = SignupController;
