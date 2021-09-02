const { Schema, model } = require('mongoose');
const isValidPassword = require('../func/isValidPassword');

const userSchema = Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  image: String,
  places: [{
    type: Schema.Types.ObjectId,
    ref: 'Place'
  }]
});

userSchema.methods.isValidPassword = isValidPassword;
module.exports = model('User', userSchema);
