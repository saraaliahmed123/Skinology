const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Routine = require('../models/Routine');

const cleanser = require('../json/cleanser.json')
const toner = require('../json/toner.json')
const serum = require('../json/serum.json')
const moisturizer = require('../json/moisturizer.json')
const suncream = require('../json/suncream.json')
const skinTypes = require("../json/skinTypes.json")

router.post('/saveRoutine', async (req, res) => {

    try{
        let newRoutine = new Routine({
            user: req.body[0].userId,
            Cleanser: req.body[1]["Cleanser"],
            Toner: req.body[1]["Toner"],
            Serum: req.body[1]["Serum"],
            Moisturizer: req.body[1]["Moisturizer"],
            Suncream: req.body[1]["Suncream"],
            days: req.body[0].days
         })
         //console.log(newRoutine)
         await newRoutine.save();
         res.send(newRoutine)
    }
    catch(e){
      console.log("Could not save a record")

    }
    
})

router.post('/createRoutine', async (req, res) => {

   //console.log("HERERERERE"+req.body.skinType)
  
    let routineTemp = []
 
    let skinInfo = []
    req.body.skinType.forEach((val) => {
       skinInfo.push(skinTypes[val])
    })
 
    routineTemp.push(skinInfo)
 
    const here = [cleanser, toner, serum, suncream]
 
    let routineInfo = {};
    here.forEach((types) => {
       const cleanserList = []
       let myCleanser;
       if (!req.body.skinType.includes("I don't know"))
       {
          if (types[0].Label !== "Serum")
          {
             req.body.skinType.forEach((val) => {
                const hi = types.filter(item => item.skinType === val)
                cleanserList.push(...hi)
             })
             myCleanser = cleanserList[Math.floor(Math.random()*cleanserList.length)]
          }
          else{
             req.body.skinConcern.forEach((val) => {
                const hi = types.filter(item => item.skinConcern === val)
                cleanserList.push(...hi)
             })
             myCleanser = cleanserList[Math.floor(Math.random()*cleanserList.length)]
          }
          
       }
       else{
          if (!types[0].Label === "Serum")
          {
             const hi = types.filter(item => item.skinType === "Sensitive")
             myCleanser = hi[Math.floor(Math.random()*hi.length)]
          }
          else
          {
             const hi = types.filter(item => item.skinConcern === "Hydration")
             myCleanser = hi[Math.floor(Math.random()*hi.length)]
          }
       }
 
       routineInfo[types[0].Label] = myCleanser
    })
 
    routineInfo["Moisturizer"] = moisturizer[Math.floor(Math.random()*moisturizer.length)]
 
    routineTemp.push(routineInfo)
   //  console.log(routineTemp)
    res.json(routineTemp)
    
 })

 router.get('/getRoutine/:id', async (req, res) => {
  // console.log(req.body.id+"routine routes")
   try{
      const routine = await Routine.find({"user": req.params.id})
      //console.log(routine)
      res.send(routine)
   }
   catch(e){
      console.log("Could not get a record")
   }
})

router.patch('/editRoutine', async (req, res) => {
   console.log(req.body.id+"server side")
   console.log(req.body.routine["Cleanser"])
   console.log(req.body.routine.Cleanser)
   try{
      const routine = await Routine.findById(req.body.id)
      routine.Cleanser = req.body.routine["Cleanser"]
      routine.Toner = req.body.routine["Toner"]
      routine.Serum = req.body.routine["Serum"]
      routine.Moisturizer = req.body.routine["Moisturizer"]
      routine.Suncream = req.body.routine["Suncream"]
      // console.log(routine)
      await routine.save()
      res.send(routine)
   }
   catch(e){
      console.log("Could not edit a record")
   }
})
 
 module.exports = router;
 