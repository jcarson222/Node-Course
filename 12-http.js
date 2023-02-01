const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("About us");
    return;
  }
  if (req.url === "/purchase") {
    res.end("Buy our stuff!");
    return;
  }
  res.end(
    `<h1>Oops!</h1><p>This page is not available.</p><a href="/">Home</a>`
  );
});

server.listen(3000);
