export default function cleanSet(set, startString) {
  // If startString is empty, return an empty string
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  // Create an array to hold the strings
  const strArr = [];

  // Get the length of the startString
  const startStringLen = startString.length;

  // Iterate through each element in the set
  set.forEach((element) => {
    // Check if the element starts with the startString
    if (typeof element === 'string' && element.startsWith(startString)) {
      // Get the rest of the string and push to the array
      const restOfString = element.substring(startStringLen);
      strArr.push(restOfString);
    }
  });

  // Join each element in the strArr by dashes '-'
  return strArr.join('-');
}
