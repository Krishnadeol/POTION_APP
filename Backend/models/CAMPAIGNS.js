const mongoose = require("mongoose");
const { Schema } = mongoose;

const CampaignSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  target: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    dafault: 0,
  },
});

const Campaign = mongoose.model("Campaign", CampaignSchema);
module.exports = Campaign;
