function Logger(logString: string){
  return function(constructor: Function){
    console.log(logString)
    console.log('constructor-->', constructor)
  }
}

function WithTemplate(template: string, hookId: string){
  return function(constructor: any){
    console.log('Rendering template...')
    const hookEl = document.getElementById(hookId)
    const p = new constructor()
    if(hookEl){
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent = p.name
    }
  }
}

@Logger('LOGGING')
@WithTemplate('<h1>My Person Object<h1>', 'app')
class Person {
  name = 'Summer'
  constructor(){
    console.log('Creating person object...')
  }
}

const pers = new Person()

console.log(pers)


// ---

function Log(target: any, propertyName: string | Symbol){
  console.log('Property Decorator!')
  console.log(target, propertyName)
}

function Log2(target: any, propertyName: string | Symbol, descriptor: PropertyDescriptor){
  console.log('Accessor Decorator!')
  console.log(target)
  console.log(propertyName)
  console.log(descriptor)
}

function Log3(target: any, propertyName: string | Symbol, descriptor: PropertyDescriptor){
  console.log('Method Decorator!')
  console.log(target)
  console.log(propertyName)
  console.log(descriptor)
}

function Log4(target: any, propertyName: string | Symbol, position: number){
  console.log('Parameter Decorator!')
  console.log(target)
  console.log(propertyName)
  console.log(position)
}

class Product{
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number){
    if(val > 0){
      this._price = val
    } else {
      throw new Error('Invalid price - should be positive!')
    }
  }
  constructor(t: string, p:number){
    this.title = t
    this._price = p
  }

  @Log3
  getPriceWithTax(@Log4 tax: number){
    return this._price * (1 + tax)
  }

}


// ----

function WithTemplateNew(template: string, hookId: string){
  console.log('TEMPLATE FACTORY')
  return function<T extends {new(...args:any[]): {name: string}}>(originalConstructor: T){
    return class extends originalConstructor{
      constructor(...args:any[]){
        super()
        console.log('Rendering template...')
        const hookEl = document.getElementById(hookId)
        if(hookEl){
          hookEl.innerHTML = template
          hookEl.querySelector('h1')!.textContent = this.name
        }
      }
    }
  }
}

@WithTemplateNew('<h1>My Person Object<h1>', 'app2')
class PersonNew {
  name = 'Summer'
  constructor(){
    console.log('Creating person object...')
  }
}

const perTest = new PersonNew()


// ---

function Autobind(target: any, propertyName: string , descriptor: PropertyDescriptor){
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    value: function(){
      originalMethod.call(this)
    }
  }
  return adjDescriptor
}

class Printer{
  message = 'This works!'

  @Autobind
  showMessage(){
    console.log(this.message)
  }
}

const p = new Printer()
const button = document.querySelector('button')!
button.addEventListener('click', p.showMessage.bind(p))


// ------

interface ValidateConfig{
  [property: string]: {
    [validatebleProp: string]: string[]  // ['required', 'positive']
  }
}

const registeredValidators: ValidateConfig = {}

function Required(target:any, propName: string){
  const oldValidator = registeredValidators[target.constructor.name]?.[propName]? registeredValidators[target.constructor.name][propName] : []
  console.log(oldValidator)
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...oldValidator,'required']
  }
}

function PositiveNumber(target:any, propName: string){
  const oldValidator = registeredValidators[target.constructor.name]?.[propName]? registeredValidators[target.constructor.name][propName] : []
  console.log(oldValidator)
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...oldValidator,'positive']
  }
}

function validate(obj: any){
  const objValidateConfig = registeredValidators[obj.constructor.name];
  if(!objValidateConfig){
    return true
  }
  let isValid = true
  for(const prop in objValidateConfig){
    for(const validator of objValidateConfig[prop]){
      switch(validator){
        case 'required':
          isValid = isValid && !!obj[prop]
          break
        case 'positive':
          isValid = isValid && obj[prop] > 0
          break
      }
    }
  }
  return isValid
}



class Course{
  @Required
  title: string
  @Required
  @PositiveNumber
  price: number

  constructor(t: string, p:number){
    this.title = t
    this.price = p
  }
}

const courseForm = document.querySelector('form')
courseForm.addEventListener('submit', event=>{
  event.preventDefault()
  const titleEl = document.getElementById('title') as HTMLInputElement
  const priceEl = document.getElementById('price') as HTMLInputElement

  const title = titleEl.value
  const price = +priceEl.value

  const createdCourse = new Course(title, price)
  if(!validate(createdCourse)){
    alert('Invilid input, please try again!')
    return
  }
  console.log(createdCourse)
})