const {readFileSync, writeFileSync} = require('fs')

console.log("start")

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/result-sync.txt', `Sync result: ${first}...${second}.`)
// ^^ if file 'result-sync.txt' doesn't exist, it will auto create

console.log('done with this task')
console.log('starting next task')