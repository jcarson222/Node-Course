const { readFile, writeFile } = require("fs").promises;
// MOST EFFICIENT: 'require('fs').promises' --> all 'fs' methods are now in promise form.

const util = require("util"); // the 'util' module contains a method called 'promisify'.
// promisify takes a function following the common error-first callback style, i.e. taking an (err, value) => ... callback as the last argument, and returns a version that returns promises.

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
// ^^^ These are equivalent to what we did in '2-promise.js' (getText) function.

// The ASYNC FUNCTION declaration declares an async function where the AWAIT keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
// The AWAIT keyword makes the function pause the execution and wait for a resolved promise before it continues
// async function funcName(){...}
// or
const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");

    await writeFile(
      "./content/result-promisify.txt",
      `Handled: ${first} ${second}`
    );

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
