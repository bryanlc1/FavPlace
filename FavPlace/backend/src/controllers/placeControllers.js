const Place = require('../models/place');

async function getAll({ query }, res) {
  try {
    const foundPlace = await Place.find(query)
      .populate({ path: 'user', select: ['name', 'image'] });
    return res.send(foundPlace);
  } catch (error) {
    return res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const newPlace = await Place.create(body);
    res.status(201);
    res.send(newPlace);
  } catch (error) {
    res.send(error);
  }
}

async function getOneById({ params: { placeId } }, res) {
  try {
    const findPlace = await Place.findById(placeId);
    res.send(findPlace);
  } catch (error) {
    res.send(error);
  }
}

async function updateOneById({ params: { placeId }, body }, res) {
  try {
    const newPlace = await Place.findByIdAndUpdate(
      placeId,
      body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    res.send(newPlace);
  } catch (error) {
    res.send(error);
  }
}

async function addOneElementbyId({ params: { userId }, body }, res) {
  try {
    const newPlace = await Place.findByIdAndUpdate(
      userId,
      { $addToSet: body },
      {
        new: true,
        useFindAndModify: false
      }
    );

    res.send(newPlace);
  } catch (error) {
    res.send(304);
    res.send(error);
  }
}

async function deleteById({ params: { placeId } }, res) {
  try {
    const placeDelete = await Place.findByIdAndDelete(placeId);

    res.status(204);
    res.send(placeDelete);
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  updateOneById,
  addOneElementbyId,
  deleteById
};
