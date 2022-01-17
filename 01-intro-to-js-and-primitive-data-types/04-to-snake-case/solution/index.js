export const toSnakeCase = (string = '') => {
  const result = [];

  let slice = ''

  for (const char of string) {
    if (char === char.toUpperCase()) {
      if (slice.length) {
        result.push(slice);
      }

      slice = char.toLowerCase();
    } else {
      slice += char;
    }
  }

  result.push(slice);

  return result.join('_');
}
