const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  orderStatus: {
    type: String,
    default: "Order Placed",
  },
  OrderItems: {
    type: Array,
    require: true,
  },
  OrderCost: {
    type: Number,
    require: true,
  },
  Address: {
    type: Object,
    require: true,
  },
});

module.exports = mongoose.model("Orders", OrderSchema);
