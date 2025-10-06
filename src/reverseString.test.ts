import { reverseString } from './reverseString';

test('function exists', () => {
  expect(reverseString).toBeDefined();
});

test('reverses string', () => {
  const string = 'hello world';
  const expected = 'dlrow olleh';
  expect(reverseString(string)).toBe(expected);
});
