export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array
  const values = [...reportWithIterator];

  // Join the array elements with ' | ' as separator
  return values.join(' | ');
}
