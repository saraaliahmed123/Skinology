// server/routes.js
const express = require('express');
const router = express.Router();

const bcrypt = require("bcrypt");

const User = require('../models/User');

router.post('/register', async (req, res) => {
   try{
      let newUser = new User({ 
         firstName: req.body.firstName, 
         lastName: req.body.lastName, 
         email: req.body.email, 
         password: req.body.password,
         skinType: req.body.skinType, 
         skinConcern: req.body.skinConcern,
         age: req.body.age,
         gender: req.body.gender
      });

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
      newUser.password = hashedPassword;

      await newUser.save();
      res.send(newUser)
   }
   catch(e){
      console.log("New User could not be created")
   }
 })

router.post('/login', async (req, res) => {
   try{
      const user = await User.findOne({"email": req.body.email});
      if(user) {
         // res.send("User not found");
         const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
         if (isPasswordCorrect)
         {
            res.send(user)
         }

      }
   }
   catch(e){
      console.log("Could not Login")
   }
})

router.get('/users/:id', async (req, res) => {
   // console.log(req.body)
   // console.log(req.params)

   User.find({}).then(function (users) {
      res.send(users);
   });
})

router.patch('/updateInformation', async (req, res) => {
   try{
      const user = await User.findById(req.body.id)
      user.skinType = req.body.skinType
      user.skinConcern = req.body.skinConcern
      await user.save()
      res.send(user)
   }
   catch(e){
      console.log("Could not update information")
   }
})


module.exports = router;
