class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
const employee1 = Department.createEmployee('Summer');
console.log(employee1, Department.fiscalYear);
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error('Please pass in a valid value!');
        this.addReport(value);
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addEmployee(employee) {
        if (name === 'Max')
            return;
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Summer', 'Snyder']);
it.describe();
it.addEmployee('Summer');
const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Penny';
console.log(accounting.mostRecentReport);
accounting.addReport('Something went wrong....');
accounting.addEmployee('Max');
accounting.addEmployee('Ann');
accounting.printReports();
accounting.printEmployeeInformation();
/*
const copy104 = { describe:d104.describe, name: "new 104" }
copy104.describe()
*/ 
//# sourceMappingURL=app.js.map