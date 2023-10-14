const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ConnectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://nmvmanikanta:MavinNara1234@cluster0.mktinqb.mongodb.net/Restarent?retryWrites=true&w=majority"
    )
    .then(console.log("DB Connected"));
};

module.exports = ConnectDb;
