// server/routes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User creation route
// router.post("/register", async (req, res) => {
//    // const { firstName, lastName, email, password } = req.body;
//    const newUser = new User({ 
//       firstName: req.body.firstName, 
//       lastName: req.body.lastName, 
//       email: req.body.email, 
//       password: req.body.password 
//    });
//    try{
//       await newUser.save();
//    }
//    catch(e){
//       console.log(e)
//    }
//  });

router.post('/register', async (req, res) => {
   //const { firstName, lastName, email, password } = req.body;
   let newUser = new User({ 
      firstName: req.body.firstName, 
      lastName: req.body.lastName, 
      email: req.body.email, 
      password: req.body.password 
   });
   res.send(newUser)
   try{
      await newUser.save();
   }
   catch(e){
      console.log(e)
   }
})

router.get('/users', async (req, res) => {
   //const { firstName, lastName, email, password } = req.body;
   User.find({}).then(function (users) {
      res.send(users);
   });
})


module.exports = router;
