let userInput: unknown
let userName: string

userInput = 'Summer'
if(typeof userInput === 'string'){
  userName = userInput
}


function generateError(message: string, code: number): never{
  throw {message, errorCode: code}
}

console.log(generateError('An error occurred!', 500))