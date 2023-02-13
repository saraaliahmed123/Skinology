const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  user: mongoose.SchemaTypes.ObjectId,
  images: {
    type: [],
    required: true
  },
  completed:{
    type: [String],
    required: true
  },
  date:{
    type: Date,
    default: () => new Date(),
    immutable: true,
    required: true
  },
  type:{
    type: String,
    required: true
  }
  
});

module.exports = mongoose.model('Record', recordSchema);