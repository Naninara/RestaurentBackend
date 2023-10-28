const express = require("express");
const LoginRouter = require("./Routes/LoginRoutes");
const app = express();
const rest = require("./Model/MenuModel");
const cors = require("cors");
const MenuRouter = require("./Routes/MenuRoutes");
const CuisinesRoute = require("./Routes/CuisineRoute");
const dbconnection = require("./Helpers/ConnectDb");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/menu", MenuRouter);
app.post("/add", async (req, res) => {
  const data = req.body;
  await rest
    .insertMany(req.body)
    .then((response) => {
      console.log(response);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.use("/auth", LoginRouter);
app.use("/cuisine", CuisinesRoute);
dbconnection();
app.listen(3500, () => {
  console.log(`Server running on port 3500 and Db connected`);
});
