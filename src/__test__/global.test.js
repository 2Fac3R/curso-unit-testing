const text = "Hello World!";
const fruits = ['apple', 'watermelon', 'banana'];

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""))
};

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    (str)
      ? resolve(str.split("").reverse().join(""))
      : reject(Error('Error'));
  })
}

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

test('Test a Callback', () => {
  reverseString('Hello', (str) => {
    expect(str).toBe('olleH');
  })
})

test('Test a Promise', () => {
  return reverseString2('Hello')
    .then(string => {
      expect(string).toBe('olleH');
    })
})

test('Test async/await', async () => {
  const string = await reverseString2('Hello');
  expect(string).toBe('olleH');
})

// afterEach(() => console.log('After each test'));
// afterAll(() => console.log('After all the tests'));

// beforeEach(() => console.log('Before each test'));
// beforeAll(() => console.log('Before all the tests'));