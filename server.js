const http = require("http");
// creating the server
const server = http.createServer((req, res) => {
  console.log("request made");
});

// listening to request
server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
