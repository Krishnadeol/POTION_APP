const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

// const corsOptions = {
//   origin: "http://localhost:5173/",
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // you wiil find the collextion at this route

app.use(router);
const ngoRouter = require("./routes/ngo");
const mailRouter = require("./routes/otp");
const userRouter = require("./routes/user");
const shopRouter = require("./routes/shop");
app.get("/", (req, res) => {
  res.send("The Site is Live for Potion app");
});
console.log("here i am");
// routes =>
app.use("/ngo", ngoRouter);
app.use("/otp", mailRouter);
app.use("/user", userRouter);
app.use("/shop", shopRouter);

connectToMongo()
  .then(() => {
    const server = app.listen(process.env.PORT, () =>
      console.log(`Server started on ${process.env.PORT} for ngo app`)
    );
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
