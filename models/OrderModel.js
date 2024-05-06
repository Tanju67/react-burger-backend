const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    phone: {
      type: String,
      required: [true, "Please provide a phone number"],
    },
    street: {
      type: String,
      required: [true, "Please provide a street"],
    },
    houseNumber: {
      type: String,
      required: [true, "Please provide a house number"],
    },
    orderItems: [],
    status: {
      type: String,
      enum: ["preparing", "on the way", "delivered"],
      default: "preparing",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
