abstract class Department {
  static fiscalYear = 2020
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name:string){

  }

  static createEmployee(name: string){
    return {name: name}
  }

  abstract describe(this: Department):void

  addEmployee(employee: string){
    this.employees.push(employee)
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const employee1 = Department.createEmployee('Summer')
console.log(employee1, Department.fiscalYear)

class ITDepartment extends Department{
  admins: string[];
  constructor(id: string, admins: string[]){
    super(id, 'IT')
    this.admins = admins
  }
  describe(){
    console.log('IT Department - ID: '+ this.id)
  }
}

class AccountingDepartment extends Department{
  private lastReport: string
  private static instance: AccountingDepartment

  get mostRecentReport(){
    if(this.lastReport) return this.lastReport
    throw new Error('No report found')
  }

  set mostRecentReport(value: string){
    if(!value) throw new Error('Please pass in a valid value!')
    this.addReport(value)
  }

  describe(){
    console.log('Accounting Department - ID: '+ this.id)
  }

  private constructor(id: string, private reports:string[]){
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }

  static getInstance(){
    if(AccountingDepartment.instance){
      return this.instance
    }
    this.instance = new AccountingDepartment('d2',[])
    return this.instance
  }
  addEmployee(employee: string){
    if(name === 'Max') return
    this.employees.push(employee)
  }

  addReport(text: string){
    this.reports.push(text)
    this.lastReport = text
  }

  printReports(){
    console.log(this.reports)
  }
}

const it = new ITDepartment('d1',['Summer','Snyder'])
it.describe()
it.addEmployee('Summer')

const accounting = AccountingDepartment.getInstance()
accounting.mostRecentReport = 'Penny'
console.log(accounting.mostRecentReport)
accounting.addReport('Something went wrong....')
accounting.addEmployee('Max')
accounting.addEmployee('Ann')
accounting.printReports()
accounting.printEmployeeInformation()

/*
const copy104 = { describe:d104.describe, name: "new 104" }
copy104.describe()
*/