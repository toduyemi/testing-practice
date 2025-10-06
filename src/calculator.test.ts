import { calculator } from './calculator';

describe('calculator', () => {
  const x = 10;
  const y = 10;
  test('multiply', () => {
    expect(calculator.add(x, y)).toEqual(20);
  });
  test('subtract', () => {
    expect(calculator.subtract(x, y)).toEqual(0);
  });
  test('divide', () => {
    expect(calculator.divide(x, y)).toEqual(1);
  });
  test('multiply', () => {
    expect(calculator.multiply(x, y)).toEqual(100);
  });
});
