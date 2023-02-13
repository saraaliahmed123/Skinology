const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routineSchema = new Schema({
  user: mongoose.SchemaTypes.ObjectId,
  Cleanser: {
    type: {},
    required: true
  },
  Toner: {
    type: {},
    required: true
  },
  Serum: {
    type: {},
    required: true
  },
  Moisturizer: {
    type: {},
    required: true
  },
  Suncream: {
    type: {},
    required: true
  },
  days: {
    type: {},
    required: true
  },
});

module.exports = mongoose.model('Routine', routineSchema);
