const { Schema, model } = require('mongoose');
const isValidPassword = require('../func/isValidPassword');

const userSchema = Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  image: { type: String, default: 'https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png ' },
  places: [{
    type: Schema.Types.ObjectId,
    ref: 'Place'
  }]
});

userSchema.methods.isValidPassword = isValidPassword;
module.exports = model('User', userSchema);
