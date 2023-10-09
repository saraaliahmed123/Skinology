// server/routes.js
const express = require('express');
const router = express.Router();

const cleanser = require('../json/cleanser.json')
const toner = require('../json/toner.json')
const serum = require('../json/serum.json')
const moisturizer = require('../json/moisturizer.json')
const suncream = require('../json/suncream.json')

router.get('/getProduct/:name', async (req, res) => {
   try{
      const products = [...cleanser, ...toner, ...serum, ...moisturizer, ...suncream]
      const here = products.filter(element => element.name.toLowerCase().includes(req.params.name.toLowerCase()));
      console.log(here)
      res.send(here)
   }
   catch(e){
      console.log("Could not Login")
   }
})

router.get('/getAllProducts', async (req, res) => {
   try{
      const products = [...cleanser, ...toner, ...serum, ...moisturizer, ...suncream]
      res.send(products)
   }
   catch(e){
      console.log("Could not Login")
   }
})

router.get('/getCleansers', async (req, res) => {
   try{
      const products = [...cleanser]
      res.send(products)
   }
   catch(e){
      console.log("Could not Login")
   }
})

router.get('/getToners', async (req, res) => {
   try{
      const products = [...toner]
      res.send(products)
   }
   catch(e){
      console.log("Could not Login")
   }
})

router.get('/getSerums', async (req, res) => {
   try{
      const products = [...serum]
      res.send(products)
   }
   catch(e){
      console.log("Could not Login")
   }
})

router.get('/getMoisturizers', async (req, res) => {
   try{
      const products = [...moisturizer]
      res.send(products)
   }
   catch(e){
      console.log("Could not Login")
   }
})

router.get('/getSuncreams', async (req, res) => {
   try{
      const products = [...suncream]
      res.send(products)
   }
   catch(e){
      console.log("Could not Login")
   }
})



module.exports = router;