const { Schema, model } = require('mongoose');

const userSchema = Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  places: [{
    type: Schema.Types.ObjectId,
    ref: 'Place'
  }]
});
module.exports = model('User', userSchema);
