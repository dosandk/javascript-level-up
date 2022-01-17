import { debounce } from './solution/index.js';

describe('debounce', () => {
  beforeAll(() => {
    // Tell Jest to mock all timeout functions
    jest.useFakeTimers();
  })

  it('should return a function', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    expect(typeof debouncedFunc).toBe('function');
  });

  it('should be executed just once', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    for (let i = 0; i < 10; i++) {
      debouncedFunc();
    }

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });

  it('should have ability to pass argument through debounced function', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    const arg = 'dummy arg';

    debouncedFunc(arg);

    jest.runAllTimers();

    expect(func).toBeCalledWith(arg);
  });
});
