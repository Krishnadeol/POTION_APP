const connectToMongo = require('./db');
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const ngoRouter = require('./routes/ngo');

app.get('/',(req,res)=>{
  res.send('Hello world')
})
// routes =>
app.use('/ngo', ngoRouter);
//app.use('/user','./routes/user');
//app.use('/shop','./routes/shop');

connectToMongo().then(() => {
    const server = app.listen(process.env.PORT, () =>
      console.log(`Server started on ${process.env.PORT} for  app`)
    );
  }).catch(error => {
    console.error("Error connecting to MongoDB:", error.message);
  });
