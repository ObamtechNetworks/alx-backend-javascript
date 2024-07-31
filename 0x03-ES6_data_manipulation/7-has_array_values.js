export default function hasValuesFromArray(set, array) {
  const result = array.every((element) => {
    const check = set.has(element);

    return check;
  });

  return result;
}
