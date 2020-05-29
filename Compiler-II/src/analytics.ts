import { clickHandler } from './app'

function sendAnalytics(data:string){
  console.log(data)
}

sendAnalytics('The data')

function add(n1: number, n2: number){
  if( n1 + n2 > 0 ){
    return n1 + n2
  }
  return 0
}

add(2,5)

clickHandler("message")
