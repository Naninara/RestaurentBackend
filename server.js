const express = require("express");
const LoginRouter = require("./Routes/LoginRoutes");
const app = express();
const OrderRouter = require("./Routes/PlaceOrderApi");
const cors = require("cors");
const MenuRouter = require("./Routes/MenuRoutes");
const CuisinesRoute = require("./Routes/CuisineRoute");
const dbconnection = require("./Helpers/ConnectDb");
const ForgotPass = require("./Routes/ChangePassword");
const AdminMiddleWare = require("./Middleware/AdminAccessVerify");

const verifyJWT = require("./Middleware/jwtParsor");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/forgot", ForgotPass);
app.use("/auth", LoginRouter);
app.use("/cuisine", CuisinesRoute);

app.use(verifyJWT);

app.use("/menu", MenuRouter);
app.use("/orders", OrderRouter);

app.use(AdminMiddleWare);

app.get("/admin", (req, res) => {
  res.send("hiii");
});
dbconnection();
app.listen(3500, () => {
  console.log(`Server running on port 3500 and Db connected`);
});
