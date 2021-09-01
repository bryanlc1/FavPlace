const { Router } = require('express');
const passport = require('passport');
const userController = require('../controllers/userControllers');

const userRouter = Router();
userRouter
  .route('/')
  .get(userController.getAll)
  .post(userController.createOne);

userRouter
  .route('/:userId')
  .all(passport.authenticate('jwt', { session: false }))
  .get(userController.getOneById)
  .put(userController.updateOneById)
  .delete(userController.deleteById)
  .patch(userController.addOneElementbyId);

module.exports = userRouter;
