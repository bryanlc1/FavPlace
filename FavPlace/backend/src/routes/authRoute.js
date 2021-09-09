/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const passport = require('passport');
const authController = require('../controllers/authControllers');

const authRoute = new Router();
authRoute.post(
  '/register',
  passport.authenticate('signup', { session: false }),
  authController.register
);

authRoute.post(
  '/login',
  passport.authenticate('login', { session: false }),
  authController.login
);

authRoute.post(
  '/refreshToken',
  authController.thisrefreshToken

);

authRoute.post(
  '/logout', authController.logout
);

authRoute.post(
  '/refreshToken', authController.thisrefreshToken
);
module.exports = authRoute;
