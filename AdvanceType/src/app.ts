interface Admin {
  name: string;
  privileges: string[]
}

interface Employee {
  name: string;
  startDate: Date
}

interface ElevatedEmployee extends Admin, Employee {}

// type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'Summer',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

function add(a: number, b: number): number
function add(a: Combinable, b: Combinable): Combinable{
  if(typeof a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString()
  }
  return a + b
}
const result = add(1, 5)

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  /*job: {
    title: 'CEO',
    description: 'My own company'
  }
  */
}

if(fetchedUserData?.job?.title) console.log(fetchedUserData.job.title)

const userInput = ''
const storedData = userInput ?? 'DEFAULT'
console.log(storedData)

/*
type UnKnownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnKnownEmployee){
  console.log('Name: ' + emp.name)
  if('privileges' in emp) console.log('Privileges: ' + emp.privileges)
  if('startDate' in emp) console.log('Start Date: ' + emp.startDate)
}

printEmployeeInformation(e1)

class Car {
  drive(){
    console.log('Driving....')
  }
}

class Truck {
  drive(){
    console.log('Driving a truck....')
  }

  loadCargo(amount: number){
    console.log('Driving cargo ....' + amount)
  }
}

type Vehicle = Car | Truck
const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle){
  vehicle.drive()
  if(vehicle instanceof Truck){
    vehicle.loadCargo(1000)
  }
}
useVehicle(v1)
useVehicle(v2)

interface Bird {
  type: 'bird'
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'
  runningSpeed: number;
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal){
  let speed;
  switch(animal.type){
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  if('flyingSpeed' in animal){
    console.log('Moving with speed: ' + speed)
  }
}

moveAnimal({type: 'bird', flyingSpeed: 10})
moveAnimal({type: 'horse', runningSpeed: 20})

const userInputElement = document.getElementById('user-input')! as HTMLInputElement
(userInputElement as HTMLInputElement).value = 'Hi there!'

interface ErrorContainer{
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid Email!',
  userName: 'Must start with a capital character'
}
*/