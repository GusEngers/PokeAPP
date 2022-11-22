const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  hp: {
    type: Number,
    default: 45
  },
  attack: {
    type: Number,
    default: 45
  },
  defense: {
    type: Number,
    default: 45
  },
  speed: {
    type: Number,
    default: 45
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  types: {
    type: Array
  },
  api: {
  	type: Boolean,
  	default: false
  }	
});

module.exports = mongoose.model('pokemon', dataSchema);