const express = require("express");
const LoginRouter = require("./Routes/LoginRoutes");
const app = express();

const cors = require("cors");
const RestaurentRouter = require("./Routes/RestaurentData");

const dbconnection = require("./Helpers/ConnectDb");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/restarent", RestaurentRouter);
app.use("/auth", LoginRouter);

dbconnection();
app.listen(3500, () => {
  console.log(`Server running on port 3500 and Db connected`);
});
