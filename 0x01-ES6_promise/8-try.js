// eslint-disable-next-line consistent-return
export default function divideFunction(numerator, denominator) {
  if (typeof numerator === 'number' && typeof denominator === 'number') {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    } else {
      return numerator / denominator;
    }
  }
}
