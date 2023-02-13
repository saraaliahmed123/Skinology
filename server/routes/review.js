// server/routes.js
const express = require('express');
const router = express.Router();

const Review = require('../models/Review');
// const Product = require('../models/Product');

router.post('/addReview', async (req, res) => {
    try{
        // let newProduct = new Product({ 
        //     Label: req.body.item.Label,
        //     skinType: req.body.item.skinType,
        //     name: req.body.item.name,
        //     link: req.body.item.link,
        //     price: req.body.item.price,
        //     rank: req.body.item.rank,
        //     ingredients: req.body.item.ingredients,
        //     image: req.body.item.image,
        //     skinConcern: req.body.item.skinConcern
        //  });
        let newReview = new Review({ 
            user: req.body.user,
            item: req.body.item,
            comment: req.body.comment,
            stars: req.body.stars
         });
         await newReview.save();
         res.send(newReview)
    }
    catch{
        console.log("Can't add a review")
    }
})

router.post('/getReviews', async (req, res) => {
    // console.log(req.body.item)
    try{
        const review = await Review.where("item").equals(req.body.item)
        // console.log(review)
        res.send(review)
    }
    catch{
        console.log("Can't get reviews")
    }
})


module.exports = router;