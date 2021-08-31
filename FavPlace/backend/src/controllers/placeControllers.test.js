const placeControllers = require('./placeControllers');
const Place = require('../models/place');

jest.mock('../models/place');

describe('Given getAll', () => {
  describe('when is invoqued', () => {
    describe('And Place.find resolved', () => {
      test('then res.send is called', async () => {
        const { query } = { req: {} };
        const res = {
          send: jest.fn()
        };
        Place.find.mockReturnValue({ populate: jest.fn().mockResolvedValue({ name: 'castillo torerre baro' }) });

        await placeControllers.getAll({ query }, res);

        expect(res.send).toHaveBeenCalled();
      });
    });

    describe('And Place.find rejected', () => {
      test('then res.send is called', async () => {
        const { query } = { req: {} };
        const res = {
          send: jest.fn()
        };
        Place.find.mockReturnValue({ populate: jest.fn().mockRejectedValue({ name: 'castillo torerre baro' }) });

        await placeControllers.getAll({ query }, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given createOne ', () => {
  describe('when is invoqued', () => {
    describe('And Place.create resolved', () => {
      test('then res.send is called', async () => {
        const { body } = { req: {} };
        const res = {
          send: jest.fn()
        };

        Place.create.mockResolvedValue({ name: 'castillo torerre baro' });

        await placeControllers.createOne({ body }, res);

        expect(res.send).toHaveBeenCalled();
      });
    });

    describe('And Place.create rejected', () => {
      test('then res.status with 500 ', async () => {
        const { body } = { req: {} };
        const res = {
          status: jest.fn(),
          send: jest.fn()
        };

        Place.create.mockRejectedValueOnce();

        await placeControllers.createOne({ body }, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given getOneById ', () => {
  describe('when is invoqued', () => {
    describe('And Place.finById resolved', () => {
      test('then res.send is called', async () => {
        const { placeId } = { req: { params: {} } };
        const res = {
          send: jest.fn()
        };

        Place.findById.mockResolvedValue({ placeId: '612cebff48c188484c0affe9' });

        await placeControllers.getOneById({ params: { placeId } }, res);

        expect(res.send).toHaveBeenCalled();
      });
    });

    describe('And Place.findById rejected', () => {
      test('Then res.send is called', async () => {
        const { placeId } = { req: { params: {} } };
        const res = {
          send: jest.fn()
        };

        Place.findById.mockRejectedValue();

        await placeControllers.getOneById({ params: { placeId } }, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given updateOneById', () => {
  describe('When is invoqued', () => {
    describe('And place findByIdAndUpdate is resolved', () => {
      test('Then res.send is called', async () => {
        const req = { body: {}, params: { userId: '612cebff48c188484c0affe9' } };
        const res = {
          send: jest.fn()
        };

        Place.mockResolvedValue({ name: 'castillo torre baro' });

        await placeControllers.updateOneById(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });

    describe('And place findByIdAndUpdate is rejected', () => {
      test('Then res.send is called', async () => {
        const req = { body: {}, params: { userId: '612cebff48c188484c0affe9' } };
        const res = {
          send: jest.fn()
        };

        Place.findByIdAndUpdate.mockRejectedValue();

        await placeControllers.updateOneById(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given deleteById', () => {
  describe('when is invoqued', () => {
    describe('And Place.findByIdandDelete is resolved', () => {
      test('Then res.status with 204', async () => {
        const req = { params: { placeId: '612cebff48c188484c0affe9' } };
        const res = { send: jest.fn(), status: jest.fn() };

        Place.findByIdAndDelete.mockResolvedValue();

        await placeControllers.deleteById(req, res);
        expect(res.status).toHaveBeenCalledWith(204);
      });
    });

    describe('And Place.findByIdandDelete is rejected', () => {
      test('Then res.send is called', async () => {
        const req = { params: { placeId: '612cebff48c188484c0affe9' } };
        const res = { send: jest.fn(), status: jest.fn() };

        Place.findByIdAndDelete.mockRejectedValue();

        await placeControllers.deleteById(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
