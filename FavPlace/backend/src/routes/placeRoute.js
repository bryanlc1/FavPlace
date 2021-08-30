const { Router } = require('express');

const placeControllers = require('../controllers/placeControllers');

const placeRoute = Router();
placeRoute
  .route('/')
  .get(placeControllers.getAll)
  .post(placeControllers.createOne);

placeRoute
  .route('/:placeId')
  .put(placeControllers.updateOneById)
  .get(placeControllers.getOneById)
  .patch(placeControllers.addOneElementbyId)
  .delete(placeControllers.deleteById);

module.exports = placeRoute;
