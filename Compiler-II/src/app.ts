const a = "a"
const b = "c"
console.log(a)
console.log(b)
const button = document.querySelector('button')!
button.addEventListener('click',()=>{
  console.log('Clicked!')
});

const c = [1,3,5,7,9]
for (let i of c) {
  console.log(i)
}

export function clickHandler(message: string){
  console.log('CLicked! ' + message)
}
