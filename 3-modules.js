// MODULES
////////////////////
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternate-export')

console.log(data)
console.log(names)
console.log(sayHi)

require('./7-mind-grenade') // function from './7-mind-grenade' is auto invoked

sayHi('nora')
sayHi(names.jesse)
sayHi(names.james) 