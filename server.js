const express = require("express");
const LoginRouter = require("./Routes/LoginRoutes");
const app = express();
const OrderRouter = require("./Routes/PlaceOrderApi");
const cors = require("cors");
const MenuRouter = require("./Routes/MenuRoutes");
const CuisinesRoute = require("./Routes/CuisineRoute");
const dbconnection = require("./Helpers/ConnectDb");
const ForgotPass = require("./Routes/ChangePassword");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/menu", MenuRouter);
app.use("/forgot", ForgotPass);
app.use("/auth", LoginRouter);
app.use("/cuisine", CuisinesRoute);
app.use("/orders", OrderRouter);
dbconnection();
app.listen(3500, () => {
  console.log(`Server running on port 3500 and Db connected`);
});
