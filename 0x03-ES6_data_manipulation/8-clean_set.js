export default function cleanSet(set, startString) {
// using the startswith method that works on strings

  // using the forEach method on the set, check if all starts with the startstirng
  // create an array to hold the strings
  const strArr = [];
  // create a variable to hold the length of the startString,
  // so as to take the remaining parts of the string that we check for using substring method
  const startStringLen = startString.length;
  set.forEach((element) => {
    if (element.startsWith(startString) && startStringLen !== 0) {
      const restOfString = element.substring(startStringLen);
      strArr.push(restOfString);
    }
  });

  // join each element in the strArry by dashes '-'
  const finalString = strArr.join('-');
  return finalString;
}
