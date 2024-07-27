export default function createEmployeesObject(departmentName, employees) {
  const employer = [];
  for (const employee of employees) {
    employer.push(employee);
  }
  return { [departmentName]: employer };
}
