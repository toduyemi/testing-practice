import { capitalize } from './capitalize';

test('function exists', () => {
  expect(capitalize).toBeDefined();
});

test('capitalizes the first letter', () => {
  const string = 'hello world';
  const expected = 'Hello world';
  expect(capitalize(string)).toBe(expected);
});
