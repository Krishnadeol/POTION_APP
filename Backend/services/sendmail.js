const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

const generateOTP = () => {
  const OTP = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  return OTP;
};
async function sendEmail(email) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dps.krishnadeol.12a@gmail.com", // Gmail email address
        pass: "clwd dhqx dqiq nobv", // Gmail App Password  2fa authentication ke bad banega
      },
    });

    const otp = generateOTP();
    const mailOptions = {
      from: "dps.krishnadeol.12a@gmail.com",
      to: email,
      subject: "Test Email",
      text: `Your OTP is: ${otp}  (Expires within 15 minutes)`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    return otp;
  } catch (error) {
    // Handle potential errors related to incorrect or non-existent email addresses
    if (error.responseCode === 550) {
      console.error("Invalid or non-existent email address:", error);
      throw new Error("Invalid or non-existent email address");
    } else {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }
  }
}

module.exports = sendEmail;
