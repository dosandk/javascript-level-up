import { truncate } from './index.js';

describe('truncate', () => {
  it('should satisfy the following conditions', () => {
    expect(truncate('', 0)).toEqual([null, '']);
    expect(truncate('1', 10)).toEqual([null, '1']);
    expect(truncate('123', 0)).toEqual([null, '123']);

    expect(truncate('1234567890', 1)).toEqual(['1', '234567890']);
    expect(truncate('1234567890', 3)).toEqual(['123', '4567890']);
    expect(truncate('1234567890', 5)).toEqual(['12345', '67890']);

    expect(truncate('1234567890', 8, '.')).toEqual(['1234567.', '890']);
    expect(truncate('1234567890', 8, '****')).toEqual(['1234****', '567890']);
    expect(truncate('1234567890', 8, '...')).toEqual(['12345...', '67890']);
  });
});

