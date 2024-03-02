const mongoose = require("mongoose");
const { Schema } = mongoose;

const DealSchema = new Schema({
  shopEmail: {
    type: String,
    required: true,
  },

  itemName: {
    type: String,
    required: true,
  },
  itemQuantity: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  expDate: {
    type: Date,
    default: null,
  },
});

const Deal = mongoose.model("Deal", DealSchema);
module.exports = Deal;
