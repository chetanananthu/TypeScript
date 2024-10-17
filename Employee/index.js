var Employee = /** @class */ (function () {
    function Employee(name, email, password, regular) {
        this.id = ++Employee.count;
        this.name = name;
        this.email = email;
        this.password = password;
        this.regular = regular;
    }
    Employee.prototype.print = function () {
        console.log("id=".concat(this.id, ", name=").concat(this.name, ", email=").concat(this.email, ", password=").concat(this.password, ", regular=").concat(this.regular));
    };
    Employee.count = 0;
    return Employee;
}());
var employee1 = new Employee('John', 'john@gmail.com', '123456', true);
var employee2 = new Employee('chetan', 'chetan@gmail.com', '123456', true);
employee1.print();
employee2.print();
