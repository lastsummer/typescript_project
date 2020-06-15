class Department {
  private employees: string[] = [];
  constructor(private readonly id: string, public name:string){

  }
  describe(this: Department){
    console.log(`Department (${this.id}):  ${this.name}`)
  }
  addEmployee(employee: string){
    this.id = "2"
    this.employees.push(employee)
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const d104 = new Department('d1','104')
d104.describe()
d104.addEmployee('Summer')


/*
const copy104 = { describe:d104.describe, name: "new 104" }
copy104.describe()
*/