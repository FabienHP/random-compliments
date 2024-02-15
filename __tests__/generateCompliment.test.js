const generateCompliment = require('../index');

describe('generateCompliment function', () => {
  test('should return a string', () => {
    expect(typeof generateCompliment()).toBe('string');
  });

  test('should not return an empty string', () => {
    expect(generateCompliment()).not.toBe('');
  });
});
