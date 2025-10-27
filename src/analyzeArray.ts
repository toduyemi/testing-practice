export function analyzeArray(arr: number[]) {
  return {
    average: getAverage(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

function getAverage(arr: number[]): number {
  const sum = arr.reduce((x, y) => x + y, 0);
  return sum / arr.length;
}
