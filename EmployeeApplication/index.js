var Employee = /** @class */ (function () {
    function Employee(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    return Employee;
}());
var employees = [
    new Employee(1, 'John', 'IT', 60000),
    new Employee(2, 'Jane', 'HR', 55000),
    new Employee(3, 'Bob', 'IT', 65000),
];
function getEmployeesByDepartment(department) {
    return employees.filter(function (employee) { return employee.department === department; });
}
function getEmployeeSalaryByDepartment(department) {
    var employeesInDepartment = getEmployeesByDepartment(department);
    return employeesInDepartment.reduce(function (accumulator, employee) {
        return accumulator + employee.salary;
    }, 0);
}
function getEmployeeById(id) {
    return employees.find(function (employee) { return employee.id === id; });
}
var itEmployees = getEmployeesByDepartment('IT');
var salarySum = getEmployeeSalaryByDepartment('IT');
console.log('IT Employees:', itEmployees);
console.log('Total Salary for IT Department:', salarySum);
var employeeById = getEmployeeById(2);
console.log('Employee with ID 2:', employeeById);
