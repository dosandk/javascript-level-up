export const max = (values = []) => {
  const numbers = values.filter(value => !isNaN(value));

  let [result] = numbers;

  for (const value of values) {
    if (value > result) {
      result = value;
    }
  }

  return result;
}
