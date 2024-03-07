// all the routes related to ngos will be here
// registeration
// login
// api requests like
//
//                    viewing specific ngo
//  user based
//                    rating them and writing revies about them
//                    appyling for work at ngo  the ngo
//

const express = require("express");
const router = express.Router();
require("dotenv").config();
const { body, validationResult } = require("express-validator");
// for encrypting the password we use bcrypt for salt generation.
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Ngo = require("../models/NGO");
const Events = require("../models/EVENTS");
const Applied = require("../models/UserApplied");
var jwt = require("jsonwebtoken");
const { find } = require("../models/UserApplied");
//const fetchUser = require('../middleware/fetchUser');
const JWT_SECRET = process.env.JWT_SECRET;

router.post(
  "/check_user",
  [body("email", "Enter a valid Email").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    let check = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ check, errors: errors.array() });
    }
    try {
      let user = await Ngo.findOne({ email: req.body.email });
      if (user) {
        return res.json({ check });
      }
      check = true;

      return res.json({ check });
    } catch (error) {
      console.log({ error: error.message });
      res.json({ error: error.message });
    }
  }
);

//  Register
router.post(
  "/Register",
  [
    // validating the name ,email and password.
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
      let user = await Ngo.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ success, message: "this user already exists" });
      }

      const myPass = req.body.password;

      // these are returning promises . Hence we should use await . here we encypting the password
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(myPass, salt);

      user = await Ngo.create({
        name: req.body.name,
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
      res.json({ success, user: userWithoutPassword });
    } catch (error) {
      console.error("something went wrong");
      res.status(500).json({ error: error.message });
    }
  }
);

// Login

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
      let user = await Ngo.findOne({ email });
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

      success = true;
      const token = jwt.sign(data, JWT_SECRET);
      res.json({ success, userWithoutPassword });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  }
);

// get all events for a particular NGO Using query parameters
router.get("/getevents", async (req, res) => {
  try {
    let email = req.query.email;
    const data = await Events.find({ email: email });
    let success = true;
    res.json({ success, data });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// add an event

router.post(
  "/addevent",
  [
    // validating the name ,email and password.
    body("email", "Enter a valid Email").isEmail(),
    body("startDate", "Start Date should not be blank").exists(),
    body("name", "Name of the event not included").exists(),
    body("description", "Name of the event not included").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      let tag = req.body.tag ? req.body.tag : "Social well-fare";

      let event = await Events.create({
        name: req.body.name,
        email: req.body.email,
        description: req.body.description,
        tag: tag,
        opportunity: req.body.oppotunity,
        stipend: req.body.stipend,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
      });

      // This structure is often used to format the response data when sending a response to the client. In this case, data contains information about the newly created event, specifically its id.
      const data = {
        event: {
          id: event.id,
        },
      };
      success = true;
      console.log(event.id);
      res.json({ success, data });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  }
);

// update an event
router.patch("/updateevent", async (req, res) => {
  const id = req.query.eid; // Get the id from query parameters
  const updates = req.body; // Get the updates from request body

  //   updatedEvent will contain the document after it has been updated if { new: true } is set.
  //    If { new: true } is not set, updatedEvent will contain the document as it was before the update operation.
  try {
    const response = await Events.findByIdAndUpdate(id, updates, { new: true });
    let success = true;
    res.status(200).json({ success, response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// delete an event

router.delete("/deleteevent/:_id", async (req, res) => {
  try {
    let id = req.params._id;
    let del = await Events.findByIdAndDelete(id);

    if (!del) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({ message: "Event deleted successfully", deletedEvent: del });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// uploading documents

// find Users who applied for the an event  show applicants
router.get("/findusers", async (req, res) => {
  try {
    const data = await Applied.find({ Eid: req.body.eid });
    let success = true;
    res.json({ success, data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// accept or reject the applied user.
router.post("/application", async (req, res) => {
  try {
    const appl = await Applied.find({ email: req.body.userEmail });
    if (appl) {
      appl.state = req.body.accepted ? 1 : 2;
      res.json({ success: true });
    } else res.status(400).json({ error: "Application not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// rate users work and give remarks for users.

module.exports = router;
