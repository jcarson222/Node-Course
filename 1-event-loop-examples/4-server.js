const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("hello world");
});
// ^^^ every time this event is requested, 'request event' will appear in the console, and the port will result w/'hello world'

server.listen(3000, () => {
  console.log("server listening on port: 3000...");
});
