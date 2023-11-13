const express = require("express");
const router = express.Router();
const {
  OrderController,
  getOrdersByEmail,
} = require("../Controllers/OrderController");

router.route("/placeorder").post(OrderController);
router.route("/:email").get(getOrdersByEmail);
module.exports = router;
