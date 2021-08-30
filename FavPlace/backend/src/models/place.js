const { Schema, model } = require('mongoose');

const placeSchema = Schema({
  namePlace: String,
  category: String,
  score: Number,
  comment: String,
  countri: String,
  city: String,
  images: [{ type: String }],
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]

});
module.exports = model('Place', placeSchema);
