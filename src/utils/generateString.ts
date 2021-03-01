export const generateString = (radix = 36) =>
  Math.random()
    .toString(radix)
    .substr(2, 10)
