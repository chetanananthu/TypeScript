class Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
    constructor(id: number, name: string, department: string, salary: number) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
}
const employees: Employee[] = [
    new Employee(1, 'John', 'IT', 60000),
    new Employee(2, 'Jane', 'HR', 55000),
    new Employee(3, 'Bob', 'IT', 65000),
];

function getEmployeesByDepartment(departmentName:string):Employee[]{
    return employees.filter(employee=>employee.department===departmentName);
}

function getEmployeeSalaryByDepartment(department:string):number{
    const employeesInDepartment=getEmployeesByDepartment(department);
    return employeesInDepartment.reduce((accumulator:number,employee:Employee):number=>{
    return accumulator+employee.salary;
    },0);
}

function getEmployeeById(id:number):Employee{
    return employees.find(employee=>employee.id===id);
}

const itEmployees = getEmployeesByDepartment('IT');
const salarySum = getEmployeeSalaryByDepartment('IT');
console.log('IT Employees:', itEmployees);
console.log('Total Salary for IT Department:', salarySum);

const employeeById = getEmployeeById(2);
console.log('Employee with ID 2:', employeeById);