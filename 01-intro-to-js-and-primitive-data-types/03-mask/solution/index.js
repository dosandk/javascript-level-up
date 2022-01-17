export const mask = (string = '', position = 0) => {
  if (position > string.length) return string;

  const maskSymbol = '*';
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    if ((index + 1) % position === 0) {
      result += maskSymbol;
    } else {
      result += string[index];
    }
  }

  return result;
}

