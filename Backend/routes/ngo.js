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
//  


const express = require('express');
const router = express.Router();
require('dotenv').config();
const { body, validationResult } = require('express-validator');
// for encrypting the password we use bcrypt for salt generation.
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Ngo = require('../models/NGO');
var jwt = require('jsonwebtoken');
//const fetchUser = require('../middleware/fetchUser');
const JWT_SECRET=process.env.JWT_SECRET;

//  Register
router.post('/Register',[    
    // validating the name ,email and password.
      body('name', 'Enter a valid name').isLength({ min: 4 }),
      body('email', 'Enter a valid Email').isEmail(),
      body('password', 'Password must have at least 5 characters').isLength({ min: 5 }),
    ], async (req, res) => {
      const errors = validationResult(req);
      let success=false;
      if (!errors.isEmpty()) {
        return res.status(400).json({ success,errors: errors.array() });
      }
    // checking for non unique email.
    try{
    let user=await Ngo.findOne({email:req.body.email})
    
    if(user){
        return res.status(400).json({success,message:"this user already exists"});
    }
    
    const myPass=req.body.password;
    
    // these are returning promises . Hence we should use await . here we encypting the password
    const salt =  bcrypt.genSaltSync(saltRounds);
    const hash =  bcrypt.hashSync(myPass, salt);
    
    
    user= await Ngo.create({
        name: req.body.name,
        password: hash,
        email: req.body.email,
      })
       
      const data={
        user:{
            id:user.id
        }
      }
      success=true;
      const token=jwt.sign(data,JWT_SECRET);
      res.json({success,token})
    
    } catch(error){
        console.error("something went wrong")
        res.status(500).json({error:error.message})
    }
    });

    
    module.exports = router ;

    