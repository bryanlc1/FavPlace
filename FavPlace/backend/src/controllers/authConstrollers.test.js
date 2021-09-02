const authControllers = require('./authControllers');

describe('Given register ', () => {
  describe('When is invoked', () => {
    test('Then res.send is called', () => {
      const req = {
        user: {}
      };
      const res = {
        res: jest.fn()
      };

      authControllers.register(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given login', () => {
  describe('when is invoked');
  describe('');
});
