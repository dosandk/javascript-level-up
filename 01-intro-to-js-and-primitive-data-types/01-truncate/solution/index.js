export const truncate = (string = '', totalLength = 0, end = '') => {
  const splitIndex = totalLength - end.length;

  if (splitIndex <= 0) return [null, string];
  if (splitIndex >= string.length) return [null, string];

  const head = string.slice(0, splitIndex) + end;
  const tail = string.slice(splitIndex, string.length);

  return [head, tail];
}
