export default function createIteratorObject(report) {
  // Extract all employees from all departments into a single array
  const allEmployees = [];
  for (const department of Object.values(report.allEmployees)) {
    allEmployees.push(...department);
  }

  // Return an iterator object
  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < allEmployees.length) {
            // eslint-disable-next-line no-plusplus
            return { value: allEmployees[index++], done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}
