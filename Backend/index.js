const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const ngoRouter = require("./routes/ngo");
const mailRouter = require("./routes/otp");
const userRouter = require("./routes/user");
app.get("/", (req, res) => {
  res.send("Hello betaji");
});
// routes =>
app.use("/ngo", ngoRouter);
app.use("/otp", mailRouter);
app.use("/user", userRouter);

connectToMongo()
  .then(() => {
    const server = app.listen(process.env.PORT, () =>
      console.log(`Server started on ${process.env.PORT} for ngo app`)
    );
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
