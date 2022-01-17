import { mask } from './index.js';

describe('mask', () => {
  it('should satisfy the following conditions', () => {
    expect(mask('Lorem ipsum dolor sit amet', 0)).toBe('Lorem ipsum dolor sit amet');
    expect(mask('Lorem ipsum dolor sit amet', 1)).toBe('**************************');
    expect(mask('Lorem ipsum dolor sit amet', 2)).toBe('L*r*m*i*s*m*d*l*r*s*t*a*e*');
    expect(mask('Lorem ipsum dolor sit amet', 3)).toBe('Lo*em*ip*um*do*or*si* a*et');
    expect(mask('Lorem ipsum dolor sit amet', 4)).toBe('Lor*m i*sum*dol*r s*t a*et');
  });
});

