const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a price"],
  },
  menu: {
    type: mongoose.Types.ObjectId,
    ref: "Menu",
    required: [true, "Please provide a menu"],
  },
});

module.exports = mongoose.model("Product", ProductSchema);
