const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shelfSchema = new Schema({
  user: mongoose.SchemaTypes.ObjectId,
  items: {
    type: [],
    required: true
  }
});

module.exports = mongoose.model('Shelf', shelfSchema);
