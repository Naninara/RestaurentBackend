const express = require("express");
const router = express.Router();
const {
  OrderController,
  getOrdersByEmail,
  getSingleOrder,
} = require("../Controllers/OrderController");

router.route("/placeorder").post(OrderController);
router.route("/:email").get(getOrdersByEmail);

router.route("/single/:id").get(getSingleOrder);
module.exports = router;
