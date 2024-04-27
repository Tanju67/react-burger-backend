const mongoose = require("mongoose");
const MenuSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  image: {
    type: String,
    required: [true, "Please provide a image"],
  },
});

module.exports = mongoose.model("Menu", MenuSchema);
