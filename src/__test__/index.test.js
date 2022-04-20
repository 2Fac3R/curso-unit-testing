const randomCity = require('../index');

describe('Test randomCity functionalities', () => {
  test('Test functionality', () => {
    expect(typeof (randomCity())).toBe('string');
  });
  test('Test a city does not exist', () => {
    expect(randomCity()).not.toMatch('Tokyo');
  })
});