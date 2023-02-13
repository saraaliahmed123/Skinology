const express = require('express');
const router = express.Router();

const Shelf = require('../models/Shelf');

router.get('/getShelf/:id', async (req, res) => {
    // console.log(req.body.id+"routine routes")
     try{
        const shelf = await Shelf.find({"user": req.params.id})
      //   console.log(shelf)
        //console.log(routine)
        res.send(shelf[0])
     }
     catch(e){
        console.log("Could not get users shelf")
     }
  })
 
 router.patch('/addToShelf', async (req, res) => {
    try{
       const shelf = await Shelf.find({ user: req.body.id})
       console.log(shelf)
       shelf[0].items = [...shelf[0].items, req.body.item]
       await shelf[0].save()
       res.send(shelf[0])
    }
    catch(e){
       console.log("Could not add to shelf")
    }
 })
 
 router.post('/createShelf', async (req, res) => {
    try{
       let newShelf = new Shelf({ 
          user: req.body.id,
          items: [req.body.routine.Cleanser, req.body.routine.Toner, req.body.routine.Serum, req.body.routine.Moisturizer, req.body.routine.Suncream]
       })
       await newShelf.save()
       res.send(newShelf)
    }
    catch(e){
       console.log("Could not create shelf")
    }
 })

 router.delete('/deleteItemInShelf', async (req, res) => {
   //  console.log(req.body)
    try{
       const shelf = await Shelf.find({ user: req.body.id})
       const arr = []
       shelf[0].items.forEach((item) => {
        if (req.body.item.image !== item.image)
        {
            arr.push(item)
        }
       })
       shelf[0].items = arr
       await shelf[0].save()
       res.send(shelf[0])
    }
    catch(e){
       console.log("Could not add to shelf")
    }
 })

module.exports = router;