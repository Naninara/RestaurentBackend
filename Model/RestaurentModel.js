const mongoose = require("mongoose");

const RestarentSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cloudinaryImageId: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  areaName: {
    type: String,
    required: true,
  },
  costForTwo: {
    type: String,
    required: true,
    default: "₹250 for two",
  },
  cuisines: {
    type: Array,
    default: ["Biryani"],
  },
  avgRating: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("RestaurentData", RestarentSchema);
