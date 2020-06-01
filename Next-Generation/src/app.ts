const userName: string = 'Summer'
let age = 30

const add = (a:number, b:number = 1) => a + b

console.log('result--->', add(5,6))

const printOutput = (print: number | string) => console.log(print)
let printOutput2:(a: number | string) => void
let printOutput3:(a: number | string) => void = function (output){ console.log(output) }



const printOutput5: (a: number | string) => void = output => console.log(output)


printOutput5(add(5))


const hobbies = ['Sports', 'Cooking','Sports2', 'Cooking2']
const[hobby1, hobby2, ...remaining] = hobbies
console.log(hobby1, hobby2)
console.log(remaining)
const activeHobbies = ['Hiking']
activeHobbies.push(...hobbies)


const person = {
  name: 'Summer',
  age: 35
}
const copiedPerson = {...person}

const add2 = (...numbers: number[]) => numbers.reduce((prev, curr) => prev+ curr , 0)
const add3 = (...numbers: [number, number, number]) => numbers.reduce((prev, curr) => prev+ curr , 0)

console.log(add2(5,8,9,3.4))
