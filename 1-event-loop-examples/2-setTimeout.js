// start os process
console.log("first");

// 'setTimeout' is also asynchronous - offloads to event loop
setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");
// completed and exited os process
