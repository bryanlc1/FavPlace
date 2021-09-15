const authControllers = require('./authControllers');

describe('Given register ', () => {
  describe('When is invoked', () => {
    test('Then res.send is called', () => {
      const req = {
        user: {}
      };
      const res = {
        send: jest.fn()
      };

      authControllers.register(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
