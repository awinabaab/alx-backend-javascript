export default function createIteratorObject(report) {
  const departmentEmployees = Object.values(report.allEmployees);
  const arr = [];

  for (const employees of departmentEmployees) {
    arr.push(...employees);
  }

  return {
    [Symbol.iterator]() {
      let idx = 0;

      return {
        next() {
          if (idx >= arr.length) {
            return { done: true };
          }

          const value = arr[idx];
          idx += 1;

          return { value, done: false };
        },
      };
    },
  };
}
