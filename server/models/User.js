const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 5
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number, 
    min: 18, 
    max: 65,
  },
  gender: {
    type: String,
  },
  skinType: {
    type: [String],
    required: true
  },
  skinConcern: {
    type: [String],
    required: true
  },
});

module.exports = mongoose.model('User', userSchema);

