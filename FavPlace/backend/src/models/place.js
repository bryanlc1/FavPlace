const { Schema, model } = require('mongoose');

const placeSchema = Schema({
  namePlace: String,
  category: String,
  score: Number,
  comment: String,
  countri: String,
  city: String,
  images: [String]

});
module.exports = model('Place', placeSchema);
