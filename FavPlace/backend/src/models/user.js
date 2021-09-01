const { Schema, model } = require('mongoose');

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

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};
module.exports = model('User', userSchema);
