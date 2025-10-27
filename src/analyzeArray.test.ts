import { analyzeArray } from './analyzeArray';

describe('analyzeArray', () => {
  test('basic functionality', () => {
    const analyzed = analyzeArray([1, 8, 3, 4, 2, 6]);
    console.log(analyzed);
    expect(analyzed).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
