// npm --> global command, comes w/ node
// npm --version --> will give you the version you have installed

// local dependency --> only used in current project *** used more often ***
// npm i <packageName> --> in terminal to install desired packages

// global dependancy --> used in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> *(mac)*

// package.json --> manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc...)
// npm init --> (step by step, press enter to skip)
// npm init -y --> (everything default)

const _ = require("lodash");
// ^^^ the underscore is the common convention for naming the require variable

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
// ^^^ we're just using .flattenDeep as an example method of lodash
