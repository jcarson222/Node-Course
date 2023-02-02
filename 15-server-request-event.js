const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })
// ^^^ previously done ('12-http.js')

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(3000);
