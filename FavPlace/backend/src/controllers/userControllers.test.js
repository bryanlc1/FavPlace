const User = require('../models/user');
const userConstroller = require('./userControllers');

jest.mock('../models/user');

describe('Given getAll', () => {
  describe('When is invoked', () => {
    describe('And user.find is resolved', () => {
      test('Then res.send is called', async () => {
        const req = { query: {} };
        const res = { send: jest.fn() };

        User.find.mockReturnValue({ populate: jest.fn().mockResolvedValue({ name: 'bryan' }) });

        await userConstroller.getAll(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });

    describe('And user.find is rejected', () => {
      test('Then res.send is called', async () => {
        const req = { query: {} };
        const res = { send: jest.fn() };

        User.find.mockReturnValue({ populate: jest.fn().mockRejectedValue({ name: 'bryan' }) });

        await userConstroller.getAll(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given createOne', () => {
  describe('When is invoked', () => {
    describe('And user.create is resolved', () => {
      test('Then res.state with 201', async () => {
        const req = { body: {} };
        const res = { send: jest.fn(), status: jest.fn() };

        User.create.mockResolvedValue({ name: 'bryan' });
        await userConstroller.createOne(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
      });
    });

    describe('And user.create is rejected', () => {
      test('Then res.send is called', async () => {
        const req = { body: {} };
        const res = { send: jest.fn(), status: jest.fn() };

        User.create.mockRejectedValue();
        await userConstroller.createOne(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given getOneById', () => {
  describe('When is invoked', () => {
    describe('And user.findById is resolved', () => {
      test('Then res.send is called', async () => {
        const req = { params: { userId: '612d45dd12f3538839f52070' } };
        const res = { send: jest.fn() };

        User.findById.mockResolvedValue({ name: 'bryan' });
        await userConstroller.getOneById(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });

    describe('And user.findById is rejected', () => {
      test('Then res.status with 500', async () => {
        const req = { params: { userId: '612d45dd12f3538839f52070' } };
        const res = { send: jest.fn(), status: jest.fn() };

        User.findById.mockRejectedValue();
        await userConstroller.getOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given updateOneById', () => {
  describe('When is invoked', () => {
    describe('And user.findByIdAndUpdate is resolved', () => {
      test('Then res.send is called', async () => {
        const req = { params: { userId: '612d45dd12f3538839f52070' } };
        const res = { send: jest.fn() };

        User.findByIdAndUpdate.mockResolvedValue({ name: 'bryan' });
        await userConstroller.updateOneById(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });

    describe('And user.findByIdAndUpdate is rejected', () => {
      test('Then res.status with 500', async () => {
        const req = { params: { userId: '612d45dd12f3538839f52070' } };
        const res = { send: jest.fn(), status: jest.fn() };

        User.findByIdAndUpdate.mockRejectedValue();
        await userConstroller.updateOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given addOneElementbyId', () => {
  describe('When is invoked', () => {
    describe('And user.findByIdAndUpdate is resolved', () => {
      test('Then res.send is called', async () => {
        const req = { params: { userId: '612d45dd12f3538839f52070' } };
        const res = { send: jest.fn() };

        User.findByIdAndUpdate.mockResolvedValue({ name: 'bryan' });
        await userConstroller.addOneElementbyId(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });

    describe('And user.findByIdAndUpdate is rejected', () => {
      test('Then res.status with 500', async () => {
        const req = { params: { userId: '612d45dd12f3538839f52070' } };
        const res = { send: jest.fn(), status: jest.fn() };

        User.findByIdAndUpdate.mockRejectedValue();
        await userConstroller.addOneElementbyId(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given deleteById', () => {
  describe('when is invoked', () => {
    describe('And user.findByIdAndDelete is resolved', () => {
      test('Then res.status with 204', async () => {
        const req = { params: { userId: '612d45dd12f3538839f52070' } };
        const res = { send: jest.fn(), status: jest.fn() };

        User.findByIdAndDelete.mockResolvedValue({ name: 'bryan' });
        await userConstroller.deleteById(req, res);

        expect(res.status).toHaveBeenCalledWith(204);
      });
    });

    describe('And user.findByIdAndDelete is rejected', () => {
      test('Then res.send is called', async () => {
        const req = { params: { userId: '612d45dd12f3538839f52070' } };
        const res = { send: jest.fn(), status: jest.fn() };

        User.findByIdAndDelete.mockRejectedValue();
        await userConstroller.deleteById(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
