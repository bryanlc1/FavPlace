const { Schema, model } = require('mongoose');

const placeSchema = Schema({
  namePlace: String,
  category: String,
  score: Number,
  comment: String,
  country: String,
  city: String,
  street: String,
  number: String,
  images: [String],
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]

});
module.exports = model('Place', placeSchema);
