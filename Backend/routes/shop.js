const express = require("express");
const router = express.Router();
require("dotenv").config();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/Shop");
const Deal = require("../models/DEAL");
var jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

router.post(
  "/Register",
  [
    body("name", "Enter a valid name").isLength({ min: 4 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must have at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    // checking for non unique email.
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ success, message: "this user already exists" });
      }
      const myPass = req.body.password;
      // these are returning promises . Hence we should use await . here we encypting the password
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(myPass, salt);
      user = await User.create({
        ownerName: req.body.name,
        password: hash,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const { password, ...userWithoutPassword } = user.toObject();
      success = true;
      const token = jwt.sign(data, JWT_SECRET);
      res.json({ success, data });
    } catch (error) {
      console.error("something went wrong");
      res.status(500).json({ error: error.message });
    }
  }
);

router.post(
  "/login",
  [
    // validating the name ,email and password.
    body("email", "Enter a valid Email").isEmail(),
    body("pass", "Password should not be blank").exists(),
  ],

  async (req, res) => {
    // CHECKING FOR INFORMATION ENTERED BY THE USER
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      //  destructuring of ther request

      const { email, pass } = req.body;
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ success, message: "Such user does not exists" });
      }

      const passCompare = await bcrypt.compare(pass, user.password);
      if (!passCompare) {
        res
          .status(400)
          .json({ success, error: "Please enter the correct credetials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const { password, ...userWithoutPassword } = user.toObject();
      2;
      success = true;
      const token = jwt.sign(data, JWT_SECRET);
      res.json({ success, userWithoutPassword });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
// add deal

router.post(
  "/adddeal",
  [
    body("email", "Shop email not present").exists(),
    body("date", "Expiery Date should not be blank").exists(),
    body("name", "Name of the Item not included").exists(),
    body("description", "Description of the event not included").isLength({
      min: 5,
    }),
    body("quantity", "Quantity of the item not defined").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      let success = false;
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(400)
          .json({ success, message: "Enter your own Email" });
      }

      let deal = await Deal.create({
        itemName: req.body.name,
        description: req.body.description,
        expDate: req.body.date,
        price: req.body.price,
        itemQuantity: req.body.quantity,
        shopEmail: req.body.email,
      });

      // This structure is often used to format the response data when sending a response to the client. In this case, data contains information about the newly created event, specifically its id.
      const data = {
        event: {
          id: deal.id,
        },
      };
      success = true;
      console.log(deal.id);
      res.json({ success, data });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  }
);

// update an event
router.patch("/updatedeal", async (req, res) => {
  // id of the deal
  const id = req.query.id; // Get the id from query parameters
  const updates = req.body; // Get the updates from request body

  //   updatedEvent will contain the document after it has been updated if { new: true } is set.
  //    If { new: true } is not set, updatedEvent will contain the document as it was before the update operation.
  try {
    const response = await Deal.findByIdAndUpdate(id, updates, { new: true });
    let success = true;
    res.status(200).json({ success, response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// delete a deal
router.delete("/deletedeal/:_id", async (req, res) => {
  try {
    let id = req.params._id;
    let del = await Deal.findByIdAndDelete(id);
    if (!del) {
      return res.status(404).json({ error: "Deal not found" });
    }

    res.json({ message: "Event deleted successfully", deletedEvent: del });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// show all deals
router.get("/getalldeals", async (req, res) => {
  try {
    let result = await Deal.find();
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// find deals  belonging to shop
router.get("/getmydeals", async (req, res) => {
  try {
    let result = await Deal.find({ shopEmail: req.body.email });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
