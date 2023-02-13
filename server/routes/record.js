// server/routes.js
const express = require('express');
const router = express.Router();

const Record = require('../models/Record');

router.post('/createRecord', async (req, res) => {
   try{
      let newRecord = new Record({ 
         type: req.body.type,
         images: req.body.images,
         completed: req.body.completed,
         user: req.body.id
      });
      await newRecord.save();
      res.send(newRecord)
   }
   catch(e){
      console.log("New record could not be created")
   }
 })

router.get('/getTodaysRecords/:id', async (req, res) => {
    try{
        const record = await Record.find({"user": req.params.id})
        const today = new Date()
        const recordsToday = []
        if (record)
        {
            record.forEach((item) => {
                if (item.date.getDate() === today.getDate())
                {
                    recordsToday.push(item)
                }
            })
            res.send(recordsToday)
        }
    }
    catch{
        console.log("Can't get todays records")
    }
})

router.get('/getRecords/:id', async (req, res) => {
    try{
        const record = await Record.find({"user": req.params.id})
        // res.set("Content-Type", "image/jpeg");
        // res.send(image.data);
        res.send(record)
    }
    catch{
        console.log("Can't get records")
    }
})


module.exports = router;