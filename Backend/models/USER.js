const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
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

  isProfileSet: {
    type: Boolean,
    default: false,
  },

  ProfileImage: {
    type: String,
    default: "",
  },

  ratings: {
    type: Number,
    default: null,
  },

  category: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
