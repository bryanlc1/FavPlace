/* eslint-disable consistent-return */
const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../models/user');

passport.use(
  'signup',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (req, email, password, next) => {
      try {
        const user = await User.findOne({ email });

        if (user) {
          return next(null, false, { message: 'user already registered' });
        }

        if (!user) {
          const newUser = await User.create({
            email,
            password,
            name: req.body.name,
            lastName: req.body.lastName,
            image: ''

          });

          return next(null, newUser);
        }
      } catch (error) {
        return next(error);
      }
    }
  )
);

passport.use(
  'login',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, next) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return next(null, false, { message: 'User not registred' });
        }

        if (!user.isValidPassword(password)) {
          return next(null, false, { message: 'Invalid password' });
        }

        return next(null, user, { message: 'Acces succesfully' });
      } catch ({ message }) {
        return next(null, false, { message });
      }
    }
  )
);
