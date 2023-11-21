const { response } = require("express");
const OrderModel = require("../Model/OrderModel");
const OrderController = async (req, res) => {
  const { email, orderItems, OrderCost, Address } = req.body;
  const order = new OrderModel({
    email: email,
    OrderItems: orderItems,
    OrderCost: OrderCost,
    Address: Address,
  });
  await order
    .save()
    .then((response) => {
      res.status(201).json({ orderId: response._id });
    })
    .catch((err) => console.log(err));
};

const getOrdersByEmail = async (req, res) => {
  const email = req.params.email;
  await OrderModel.find({ email: email })
    .then((response) => res.send(response))
    .catch((err) => console.log(err));
};

const getSingleOrder = async (req, res) => {
  const id = req.params.id;

  await OrderModel.findById(id)
    .then((response) => res.send(response))
    .catch((err) => console.log(err));
};

module.exports = { OrderController, getOrdersByEmail, getSingleOrder };
