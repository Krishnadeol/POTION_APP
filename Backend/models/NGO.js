const mongoose = require("mongoose");
const { Schema } = mongoose;

const NgoSchema = new Schema({
  name: {
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

  verified: {
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
  UPI: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  payee: {
    type: String,
    default: null,
  },
  funds: {
    type: Number,
    default: 0,
  },
});

const Ngo = mongoose.model("Ngo", NgoSchema);
module.exports = Ngo;
