const express = require("express");
const router = express.Router();
const sendEmail = require("../services/sendmail");
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    const otp = await sendEmail(email);

    return res.json({ otp: otp });
  } catch (error) {
    res.json({ error: error.message });
  }
});
module.exports = router;
