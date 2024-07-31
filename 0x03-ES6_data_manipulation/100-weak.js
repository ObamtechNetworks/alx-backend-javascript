export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  // check if the endpoint already exists in weakMap
  if (weakMap.has(endpoint)) {
    // retrieve the current count
    let count = weakMap.get(endpoint);
    // increment the count
    /* eslint-disable no-plusplus */
    count++;
    // update the count in weakmap
    weakMap.set(endpoint, count);

    // if the count is 5 or more , throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint doesn't exist, add it to weakMap with an initial count of 1
    weakMap.set(endpoint, 1);
  }
}
