export default function createIteratorObject(report) {
  let employees = [];
  for (const department in report.allEmployees) {
    employees = employees.concat(report.allEmployees[department]);
  }
  return {
    next() {
      if (employees.length === 0) {
        return { done: true };
      }
      return { value: employees.shift(), done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
