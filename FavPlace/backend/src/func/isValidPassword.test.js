const isValidPassword = require('./isValidPassword');

describe('Given isValidPassword', () => {
  describe('When is invoked', () => {
    test('Then should return a boolean', () => {
      const response = isValidPassword();
      expect(typeof response).toBe('boolean');
    });
  });
});
