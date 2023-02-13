const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: mongoose.SchemaTypes.ObjectId,
  item: {
    type: {}, 
    required: true
  },
  stars: {
    type: Number, 
    required: true
  },
  comment:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Review', reviewSchema);
