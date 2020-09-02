const names: Array<string> = []
// names[0].split(' ')

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve(10)
  },2000)
})

function merge<T extends object, U extends object>(objA:T, objB: U){
  return Object.assign(objA, objB)
}

const mergedObj = merge({name:'Max'},{age: 30})
console.log(mergedObj.age)

interface Lengthy{
  length: number
}
function countAndDescribe<T extends Lengthy>(element: T):[T, string]{
  let descriptionText = 'Got no value'
  if(element.length === 1){
    descriptionText = 'Got 1 element'
  }else if(element.length > 1){
    descriptionText = 'Got ' + element.length + ' elements'
  }
  return [element, descriptionText]
}

console.log(countAndDescribe(['Sports','Cooking']))

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
){
  return 'Value: ' + obj[key]
}
extractAndConvert({name: 'Summer'}, 'name')

class DataStorage<T>{
  private data: T[] = []
  addItem(item: T){
    this.data.push(item)
  }
  removeItem(item: T){
    this.data.splice(this.data.indexOf(item),1)
  }
  getItems(){
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Summer')
textStorage.addItem('Snyder')
textStorage.removeItem('Snyder')
console.log(textStorage.getItems())