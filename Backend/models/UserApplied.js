const mongoose = require("mongoose");
const { Schema } = mongoose;

const AppliedSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
  },

  Eid: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    minlength: 5,
  },

  Resume: {
    type: String,
    default: "",
  },

  date: {
    type: Date,
    default: Date.now,
    unique: true,
  },
});

const Applied = mongoose.model("Applied", AppliedSchema);
module.exports = Applied;
