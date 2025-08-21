//!same as prev, but we are now sending customer responses based on request url types
//!same as prev, but we are now sending customer responses based on request url types
//!same as prev, but we are now sending customer responses based on request url types
//!same as prev, but we are now sending customer responses based on request url types
//!same as prev, but we are now sending customer responses based on request url types

//we need this http module to write a server
const http = require("http");

//this is a simple server code, which takes a callback with two args, res and req
const server = http.createServer((req, res) => {
  if (req.url === "/ajay") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<p>ajay</p>");
    res.end("Welcome to Nodejs!!!!!!!!");
  } else if (req.url === "/ratna") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<p>ratna</p>");
    res.end("Welcome to Nodejs!!!!!!!!");
  } else {
    res.statusCode = 404;
    res.end();
  }
});

//now that server is done! we need to activate it and make sure it is active all the time,
// so we start the listen method on any specific port
server.listen(2898, () => {
  //this is a simple message to be printed to console when server is activated so user knows the link to find the response
  console.log("check local host 2898");
});
