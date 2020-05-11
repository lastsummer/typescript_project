function add(n1:number, n2:number){
  return n1 + n2
}

function printResult(num: number): void {
  console.log('Result: ' + num)
}

function testUndefined(num: number):undefined{
  console.log('Result: ' + num)
  return
}

printResult(add(5,12))

let addFun: Function
addFun = printResult


let combineValue: (a: number) => void
combineValue = printResult


combineValue(2)

function addAndHandel(n1:number, n2:number, cb: (num: number)=> void){
  const result = n1 + n2
  cb(result)
}

addAndHandel(5,6, (num) => {
  console.log(num)
})