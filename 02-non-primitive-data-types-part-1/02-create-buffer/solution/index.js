export const createBuffer = (string = '') => {
  const accum = [string];

  return string => {
    accum.push(string);

    return accum.join('');
  }
};
