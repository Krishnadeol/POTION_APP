const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShopSchema = new Schema({
  ownerName: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  description: {
    type: String,
    minlength: 5,
  },

  isLogoSet: {
    type: Boolean,
    default: false,
  },

  logoImage: {
    type: String,
    default: "",
  },

  ratings: {
    type: Number,
    default: null,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Shop = mongoose.model("Shop", ShopSchema);
module.exports = Shop;
