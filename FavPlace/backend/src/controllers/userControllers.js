const User = require('../models/user');

async function getAll({ query }, res) {
  try {
    const foundUsers = await User.find(query)
      .populate('places');
    return res.send(foundUsers);
  } catch (error) {
    return res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.status(201);
    res.send(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById({ params: { userId } }, res) {
  try {
    const findOne = await User.findById(userId);
    res.send(findOne);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneForProfile({ params: { userId } }, res) {
  try {
    const findOne = await User.findById(userId).populate('places');
    res.send({ name: findOne.name, lasName: findOne.lastName, places: findOne.places });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateOneById({ params: { userId }, body }, res) {
  try {
    const newUser = await User.findByIdAndUpdate(

      userId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    res.send(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function addOneElementbyId({ params: { userId }, body }, res) {
  try {
    const newUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: body },
      {
        new: true,
        useFindAndModify: false
      }
    );

    res.send(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteById({ params: { userId } }, res) {
  try {
    const userDelete = await User.findByIdAndDelete(userId);
    res.status(204);
    res.send(userDelete);
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  updateOneById,
  addOneElementbyId,
  deleteById,
  getOneById,
  getOneForProfile
};
