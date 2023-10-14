const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  gmail: {
    type: String,
    required: true,
  },
  UserName: {
    type: String,
    required: true,
  },
  passWord: {
    type: String,
    required: true,
  },
  Authority: {
    type: Array,
    default: [1500],
  },
});

module.exports = mongoose.model("UserData", userSchema);
