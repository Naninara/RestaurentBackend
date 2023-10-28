const mongoose = require("mongoose");

const MenuItemSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  cloudinaryImageId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  vegOnly: {
    type: Boolean,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("MenuItems", MenuItemSchema);
