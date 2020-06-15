var Department = /** @class */ (function () {
    function Department(id, n) {
        this.employees = [];
        this.id = id;
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + "):  " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var d104 = new Department('2047', '104');
d104.describe();
d104.addEmployee('Summer');
/*
const copy104 = { describe:d104.describe, name: "new 104" }
copy104.describe()
*/ 
//# sourceMappingURL=app.js.map