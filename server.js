const express = require("express");
const LoginRouter = require("./Routes/LoginRoutes");
const app = express();
const rest = require("./Model/RestaurentModel");
const cors = require("cors");
const RestaurentRouter = require("./Routes/RestaurentData");
const CuisinesRoute = require("./Routes/CuisineRoute");
const dbconnection = require("./Helpers/ConnectDb");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/restarent", RestaurentRouter);
app.use("/auth", LoginRouter);
app.use("/cuisine", CuisinesRoute);
dbconnection();
app.listen(3500, () => {
  console.log(`Server running on port 3500 and Db connected`);
});
