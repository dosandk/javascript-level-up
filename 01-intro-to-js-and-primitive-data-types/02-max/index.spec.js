import { max } from './solution/index.js';

describe('max', () => {
  it('should satisfy the following conditions', () => {
    expect(max([])).toBe(undefined);
    expect(max([1])).toBe(1);
    expect(max([0, -1, -2])).toBe(0);
    expect(max([20, 100, 21])).toBe(100);
    expect(max([NaN, 100])).toBe(100);
    expect(max([NaN, Infinity, 100])).toBe(Infinity);
  });
});

