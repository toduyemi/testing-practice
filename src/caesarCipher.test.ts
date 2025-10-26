import { caesarCipher } from './caesarCipher';

describe('caesarCipher', () => {
  test('wrapping', () => {
    const str = 'xyz';
    const expected = 'abc';
    expect(caesarCipher(str, 3)).toBe(expected);
  });
  test('case preservation', () => {
    const str = 'HeLLo';
    const expected = 'KhOOr';
    expect(caesarCipher(str, 3)).toBe(expected);
  });
  test('punctuation', () => {
    const str = 'Hello, World!';
    const expected = 'Khoor, Zruog!';
    expect(caesarCipher(str, 3)).toBe(expected);
  });
});
