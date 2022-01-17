import { toSnakeCase } from './index.js';

describe('toSnakeCase', () => {
  it('should satisfy the following conditions', () => {
    expect(toSnakeCase('')).toBe('');
    expect(toSnakeCase('CamelCase')).toBe('camel_case');
    expect(toSnakeCase('camelCase')).toBe('camel_case');
    expect(toSnakeCase('CAMELCASE')).toBe('c_a_m_e_l_c_a_s_e');
  });
});

