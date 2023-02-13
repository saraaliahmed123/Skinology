const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  Label: {
    type: String,
    required: true
  },
  skinType:{
    type: String,
  },
  skinConcern:{
    type: String,
  },
  name:{
    type: String,
    required: true
  },
  link:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  rank:{
    type: Number,
    required: true
  },
  ingredients:{
    type: [String],
    required: true
  },
  image:{
    type: String,
    required: true
  }
  
});

module.exports = mongoose.model('Product', productSchema);