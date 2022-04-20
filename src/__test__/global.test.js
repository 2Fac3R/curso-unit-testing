const text = "Hello World!";
const fruits = ['apple', 'watermelon', 'banana'];

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""))
};


test('It must contain a text', () => {
  expect(text).toMatch(/World/);
})

test('Do we have a banana?', () => {
  expect(fruits).toContain('banana');
})

test('Greater than', () => {
  expect(10).toBeGreaterThan(9);
})

test('Truthy', () => {
  expect(true).toBeTruthy();
})

test('Test a callback', () => {
  reverseString('Hello', (str) => {
    expect(str).toBe('olleH');
  })
})