const EventEmitter = require("events");
// ^^^ to name this 'EventEmitter' is typical practice
// ^^^ this is a CLASS, so when creating a new instance we must invoke it with 'new'

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log(`data received`);
});
// ^^^ .on('name of the event', listener())

customEmitter.emit("response");
// ^^^ Synchronously calls each of the listeners registered for the event, in the order they were registered, passing the supplied arguments to each.

// heres an example w/ multiple listeners and args:
const myEmitter = new EventEmitter();

// First listener
myEmitter.on("event", function firstListener() {
  console.log("Helloooo! first listener");
});
// Second listener
myEmitter.on("event", function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on("event", function thirdListener(...args) {
  const parameters = args.join(", ");
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners("event"));

myEmitter.emit("event", 1, 2, 3, 4, 5);
