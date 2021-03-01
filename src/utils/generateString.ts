export const generateString = (radix = 20) =>
  Math.random()
    .toString(radix)
    .substr(2, 10)
