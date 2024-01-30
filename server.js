const http = require("http");
// creating the server
http.createServer((req, res) => {
  console.log("request made");
});

// listening to request
Server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
