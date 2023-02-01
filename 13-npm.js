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

// nodemon --> terminal, npm i nodemon -D (nodemon is a dev dependency)
// to use nodemon --> package.json, "scripts": {
//   "start": "nodemon app.js", --> terminal, npm start (runs nodemon)
// }
// i have intalled nodemon globally, so i can run it by terminal, nodemon <file>. (ANY project)

// to uninstall a package CLEANLY
// - delete node_modules folder
// - delete package.lock.json
// - delete package from dependencies (from package.json)
// - terminal, npm install
// ^^^ this will ensure your app doesn't contain unneeded files/depencies from whatever package you uninstall
// you can also do: terminal, npm uninstall <packageName>, but you might end up with the above ^

const _ = require("lodash");
// ^^^ the underscore is the common convention for naming the require variable

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello World!");
// ^^^ we're just using .flattenDeep as an example method of lodash
