import { createBuffer } from './index.js';

describe('createBuffer', () => {
  it('should have initial value', () => {
    const saveToBuffer = createBuffer('initial string');

    expect(saveToBuffer()).toBe('initial string');
  })

  it('should save strings to buffer', () => {
    const saveToBuffer = createBuffer();

    saveToBuffer('first ');

    const result = saveToBuffer('second');

    expect(result).toBe('first second');
  });
});
