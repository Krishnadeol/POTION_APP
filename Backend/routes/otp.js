const express = require("express");
const router = express.Router();
const sendEmail = require("../services/sendmail");
const { useRouteError } = require("react-router-dom");
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    const otp = await sendEmail(email);
    return res.json({ OTP: otp });
  } catch (error) {
    res.json({ error: "otp page" });
  }
});
module.exports = router;
