const { Router } = require('express');
const passport = require('passport');
const placeControllers = require('../controllers/placeControllers');

const placeRoute = Router();
placeRoute
  .route('/')
  .get(placeControllers.getAll);

placeRoute
  .route('/:placeId')
  .all(passport.authenticate('jwt', { session: false }))
  .post(placeControllers.createOne)
  .put(placeControllers.updateOneById)
  .delete(placeControllers.deleteById);

placeRoute
  .route('/create')
  .all(passport.authenticate('jwt', { session: false }))
  .post(placeControllers.createOne);

placeRoute
  .route('/public/:placeId')
  .get(placeControllers.getOneById);

module.exports = placeRoute;
