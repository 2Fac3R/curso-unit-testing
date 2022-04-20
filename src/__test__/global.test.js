const text = "Hello World!";

test('It must contain a text', () => {
  expect(text).toMatch(/World/);
})